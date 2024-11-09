import { Button, Form, Input, message, Row, Col } from "antd";
import { formButtonStyle } from "../../utils/CustomStyles";
import "./FormBar.css";

const FormBar = () => {
  const [form] = Form.useForm();

  const onFinish = (values: string) => {
    // Log the form values to the console
    console.log("Form values:", values);

    // Display success message
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const formStyles = {
    padding: "1em",
  };

  return (
    <section className="formData">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16} align="middle">
          <Col xs={24} sm={18} md={20} flex="auto">
            <Form.Item
              name="url"
              rules={[
                { required: true, message: "URL is required" },
                { type: "url", warningOnly: true },
                { type: "string", min: 6 },
              ]}
            >
              <Input style={formStyles} placeholder="Input URL to shorten" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={6} md={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={formButtonStyle}>
                Shorten it!
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default FormBar;
