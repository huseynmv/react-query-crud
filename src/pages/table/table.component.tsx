import React, { useState } from "react";
import { generateGuid } from "../../core/helpers/generate-guid";
import { Table } from "antd";
import { deletePost, usePosts } from "./actions/table.mutation";
import { Link } from "react-router-dom";
import useLocalization from "../../assets/lang";
const TableComponent = () => {
  const { data, isLoading } = usePosts();
  const translate = useLocalization();
  //   console.log(data);
  const deletePosts = deletePost();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: "80px",
    },
    {
      title: "title",
      dataIndex: "title",
    },
    {
      title: "body",
      dataIndex: "body",
      ellipsis: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text: string, record: any) => (
        <span>
          <Link to={`/post/${record.id}`}>{translate("update_btn")}</Link>
          <button
            onClick={() => {
              deletePosts.mutate(record.id);
            }}
          >
            {translate("delete_btn")}
          </button>
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      pagination={false}
      rowKey={generateGuid}
      dataSource={data}
    />
  );
};

export default TableComponent;
