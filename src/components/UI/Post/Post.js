import React, { useState } from "react";
import {
  Container,
  Header,
  Author,
  Content,
  Image,
  Footer,
  Actions,
  Button,
  Comments,
  Comment,
} from "./Post.style";

export const Post = ({ data }) => {
  const [postData, setPostData] = useState({
    ...data,
    liked: false,
    shared: false,
    isCommentsOpen: false,
  });

  const handleToggleComments = () => {
    setPostData((prevState) => ({
      ...prevState,
      isCommentsOpen: !postData.isCommentsOpen,
    }));
  };

  const handleLikePost = () => {
    setPostData((prevState) => ({
      ...prevState,
      liked: !postData.liked,
    }));
  };

  return (
    <Container>
      <Header>
        <Author>{postData.author}</Author>
      </Header>
      <Content>
        {postData.content.image.length > 0 &&
          postData.content.image[0] !== "" &&
          postData.content.image.map((src, i) => (
            <Image src={src} key={i} alt={postData.author} />
          ))}
        {postData.content.video.length > 0 &&
          postData.content.video[0] !== "" &&
          postData.content.video.map((src, i) => (
            <video muted autoPlay loop>
              <source
                src={src}
                type={`video/${src.substring(src.length - 3, src.length)}`}
              />
            </video>
          ))}
        {postData.content.text !== "" && <p>{postData.content.text}</p>}
      </Content>
      <Footer>
        <Actions>
          <Button onClick={handleLikePost} liked={postData.liked}>
            Like ({postData.likes.length})
          </Button>
          <Button>Share ({postData.shares.length})</Button>
          <Button onClick={handleToggleComments}>
            Comments ({postData.comments.length})
          </Button>
        </Actions>
        <Comments open={postData.isCommentsOpen}>
          {postData.comments.length > 0 &&
            postData.comments.map(
              (comment, i) =>
                comment.user && (
                  <Comment key={`comment_${i}`}>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment_text}</p>
                  </Comment>
                )
            )}
        </Comments>
      </Footer>
    </Container>
  );
};
