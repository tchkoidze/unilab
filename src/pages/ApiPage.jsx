import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post) => (
        <PostContainer key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </PostContainer>
      ))}
      <PaginationContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationButton
            key={index}
            onClick={() => paginate(index + 1)}
            //active={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </div>
  );
};

export default PostList;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-family: Montserrat, sans-serif;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => (props.active ? "#007BFF" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#007BFF")};
  border: 1px solid #007bff;
  border-radius: 4px;
`;

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  color: #fff;
  font-family: Montserrat, sans-serif;
`;
