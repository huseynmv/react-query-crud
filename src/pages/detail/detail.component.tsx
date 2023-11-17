import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePost } from "./actions/detail.mutation";
import { Button, Form, Input } from "antd";
import { Routes } from "../../router/routes";
import useLocalization from "../../assets/lang";
import { usePosts } from "./actions/detail.query";
import { IFormValues } from "../form/form";

const DetailComponent = () => {
  const navigate = useNavigate();
  const translate = useLocalization();

  const { id } = useParams();

  const updatePost = useUpdatePost(id);

  const { data, isLoading } = usePosts(id);
  const [form] = Form.useForm<IFormValues>();

  if (!isLoading) {
    form.setFieldsValue({
      title: data.data.title,
      body: data.data.body,
    });
  }

  const onSubmit = useCallback(
    (values: any) => {
      updatePost.mutate(values);
      navigate(Routes.default);
    },
    [updatePost, navigate]
  );

  return (
    <>
      <Form form={form} name="basic" layout="vertical" onFinish={onSubmit}>
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
