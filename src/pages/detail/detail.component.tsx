import React, { useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { usePosts, useUpdatePost } from "./actions/detail.query";
import { Button, Form, Input } from "antd";

const DetailComponent = () => {
  const location = useLocation();

  const pathname = location.pathname;
  const id = pathname.split("/")[2];
  console.log(id);

  const updatePost = useUpdatePost(id);

  const { data } = usePosts(id);

  const initialValues = {
    title: data?.title,
    body: data?.body,
  };

  const onSubmit = useCallback(
    (values: any) => {
      console.log(values);
      updatePost.mutate(values);
    },
    [updatePost]
  );

  return (
    <>
      <Form
        initialValues={initialValues}
        name="basic"
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="body" label="body">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default DetailComponent;
