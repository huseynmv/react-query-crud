import React, { useCallback } from "react";
import { IFormValues } from "./form";
import {
  Form,
  Input,
  Button,
  Checkbox,
  DatePicker,
  TimePicker,
  Radio,
  Select,
} from "antd";
import { useAddPost } from "./actions/form.mutation";
import { useLocation } from "react-router-dom";
import useLocalization from "../../assets/lang";
// import { addPost } from "./actions/form.service";

const FormComponent = () => {
  const addPost = useAddPost();
  const translate = useLocalization();

  const initialValues: IFormValues = {
    title: "test",
    body: "body",
  };

  const onSubmit = useCallback(
    (values: IFormValues) => {
      console.log(values);
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
