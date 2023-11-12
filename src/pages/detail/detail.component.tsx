import React, { useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { usePosts, useUpdatePost } from "./actions/detail.mutation";
import { Button, Form, Input } from "antd";
import { Routes } from "../../router/routes";
import useLocalization from "../../assets/lang";

const DetailComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const translate = useLocalization();
  const pathname = location.pathname;
  const id = pathname.split("/")[2];
  console.log(id);

  const updatePost = useUpdatePost(id);

  const { data } = usePosts(id);
  console.log(data);

  const initialValues = {
    title: data?.title,
    body: data?.body,
  };

  const onSubmit = useCallback(
    (values: any) => {
      console.log(values);
      updatePost.mutate(values);
      navigate(Routes.default);
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
          {translate("submit_update_btn")}
        </Button>
      </Form>
    </>
  );
};

export default DetailComponent;
