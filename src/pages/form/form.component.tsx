import { useCallback } from "react";
import { IFormValues } from "./form";
import { Form, Input, Button } from "antd";
import { useAddPost } from "./actions/form.mutation";
import useLocalization from "../../assets/lang";

const FormComponent = () => {
  const addPost = useAddPost();
  const translate = useLocalization();

  const initialValues: IFormValues = {
    title: "",
    body: "",
  };

  const onSubmit = useCallback(
    (values: IFormValues) => {
      addPost.mutate(values);
    },
    [addPost]
  );

  return (
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
        {translate("submit_btn")}
      </Button>
    </Form>
  );
};

export default FormComponent;
