import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdatePost } from "./actions/detail.mutation";
import { Button, Form, Input } from "antd";
import { Routes } from "../../router/routes";
import useLocalization from "../../assets/lang";
import { usePosts } from "./actions/detail.query";

const DetailComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const translate = useLocalization();

  const pathname = location.pathname;
  const id = pathname.split("/")[2];

  const updatePost = useUpdatePost(id);

  const { data } = usePosts(id);

  const onSubmit = useCallback(
    (values: any) => {
      updatePost.mutate(values);
      navigate(Routes.default);
    },
    [updatePost]
  );

  return (
    <>
      <Form
        initialValues={{
          title: (data && data.data.title) || "",
          body: (data && data.data.body) || "",
        }}
        name="basic"
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="body" label="Body">
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
