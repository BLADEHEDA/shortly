import { Button, Form, Input, message, Row, Col } from "antd";
import { formButtonStyle } from "../../utils/CustomStyles";
import "./FormBar.css";
import { useState } from "react";

const FormBar = () => {
  const [form] = Form.useForm();
  const [shortenedURL, setShortenedURL] = useState("");

  const onFinish = async (values: { url: string }) => {
    const urlToShorten = values.url;

    try {
      console.log('Original URL:', urlToShorten);

      // Send a POST request to the Rebrandly API for URL shortening
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          accept: 'application/json',
    'content-type': 'application/json',
    apikey: '798dec9cf05d4d97aa7c320194cb6c3b'
        },
        body: JSON.stringify({
          destination: urlToShorten,
        }),
      });

      const data = await response.json();

      // Check if the response contains a shortened URL
      if (data && data.shortUrl) {
        const shortURL = data.shortUrl;
        setShortenedURL(shortURL); // Store the shortened URL in state
        message.success(`Shortened URL: ${shortURL}`);
        console.log('The shortened URL is:', shortURL);
      } else {
        message.error("Failed to shorten URL. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while shortening the URL.");
    }
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
