import { Button, Form, Input, message, Row, Col } from "antd";
import {
  formButtonStyle,
  shortenedButtonStyle,
} from "../../utils/CustomStyles";
import "./FormBar.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface shortened{
  original:string,
  shortened:string
}

const FormBar = () => {
  const [form] = Form.useForm();
  const [shortenedURL, setShortenedURL] = useState("");
  const [urls, setUrls] = useState<shortened[]>([]); 
  const [copied, setcopied] = useState(false);

  const onFinish = async (values: { url: string }) => {
    const urlToShorten = values.url;

    try {
      console.log("Original URL:", urlToShorten);

      // Send a POST request to the Rebrandly API for URL shortening
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          apikey: "f1ea18d5e5a84f629510b50bccf4e40c",
        },
        body: JSON.stringify({
          destination: urlToShorten,
        }),
      });

      const data = await response.json();

      // Check if the response contains a shortened URL
      if (data && data.shortUrl) {
        const shortURL = data.shortUrl;
        setShortenedURL(shortURL); 
        message.success(`Shortened URL: ${shortenedURL}`);

        // Append the new URL to the list of URLs 
        setUrls([...urls, { original: urlToShorten, shortened: shortURL }]);

        // Reset the form field
        form.resetFields();
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
    <section className="">
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
                <Button
                  type="primary"
                  htmlType="submit"
                  style={formButtonStyle}
                >
                  Shorten it!
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
    </section>
            {/* Display the list of shortened URLs */}
            <div className="url-list">
          {urls.map((url, index) => (
            <section className="shortened" key={index}>
              <article className="link-active-one">
                {url.original.length > 10
                  ? `${url.original.slice(0, 50)}...`
                  : url.original}
              </article>

              <hr className="horisontal" />
              <article className="link-active-two">
                <div className="shorten-link"> {url.shortened} </div>
                <div className="">
                <CopyToClipboard
                  text={url.shortened}
                  onCopy={() => setcopied(true)}
                >
                  <div className="shorten-btn">
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={shortenedButtonStyle}
                    >
                      Copy
                    </Button>
                  </div>
                </CopyToClipboard>
                </div>
              </article>
            </section>
          ))}
        </div>
    </section>
  );
};

export default FormBar;
