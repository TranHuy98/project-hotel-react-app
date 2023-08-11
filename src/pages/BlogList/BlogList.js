import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';

export const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const blogData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBlogList(blogData);
  };

  useEffect(() => {
    fetchPost();
  }, [pageCurrent]);


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      navigate('?page=1', { replace: true });
    }
  }, [location.search, navigate]);

  const onChangePage = (page) => {
    console.log(page);
    setPageCurrent(page);
    navigate(`?page=${page}`);
  };

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  useEffect(() => {
    document.title = 'LakeInn - Our Blogs';
  }, []);
  return (
    <>
      {/* blogs */}
      <div className="container-fluid blogs" style={
        { borderBottom: "2px solid #ECECEC" }
      }>
        <div className="container title">
          <p>From Blogs</p>
          <div className="icon-title">
            <img src="img/icon-title.png" />
          </div>
        </div>
        <div className="container info">
          <div className="row">
            {blogList.map((blog, index) => {
              return (
                <Blog
                image = {blog.img}
                blogID = {blog.id}
                title = {blog.title}
                description = {blog.description}
                ></Blog>
              )
            })}
          </div>
        </div>

        <Pagination
          showSizeChanger={false}
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={blogList.length}
          pageSize={4}
          showQuickJumper={false}
          current={pageCurrent}
          onChange={onChangePage}
        />
      </div>
      {/* end blogs */}

    </>
  )
}
