import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text } = Typography;
import img from "../img/Vector 8.png";

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState(""); 
  const [form] = Form.useForm(); 
  const [btn, setBtn] = useState(true); 
  const navigate = useNavigate(); 

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: values.name, 
        password: values.password,
      });
      
      const { token } = response.data; 
      localStorage.setItem("authToken", token); 

      navigate("/logincode"); 
    } catch (error) {
      console.error("Registration/Login error:", error);
      alert("Failed to register/login. Please try again.");
    }
  };

  const onValuesChange = () => {
    const hasEmptyFields = Object.values(form.getFieldsValue()).some((fieldValue) => !fieldValue);
    setBtn(hasEmptyFields);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "685px", backgroundColor: "#fca311" }}>
      <div style={{ width: 400, borderRadius: 20, backgroundColor: "#ffffff", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", position: "relative", zIndex: 1 }}>
        
        <div style={{ position: "absolute", top: 0, zIndex: -1, width: "100%", height: "50.1px", backgroundColor: "#FCA311CC" }}>
          <img style={{ width: "100%", marginTop: 50 }} src={img} alt="" />
        </div>

        <div style={{ paddingLeft: 44, paddingRight: 44 }}>
          <Title level={3} style={{ textAlign: "center", color: "#fff", fontWeight: "bold", marginBottom: 24 }}>Зарегистрироваться</Title>
          <br /><br />

          <Form form={form} layout="vertical" onFinish={onFinish} onValuesChange={onValuesChange} requiredMark={false} style={{ marginTop: 8 }}>
            
            <Form.Item label={<span style={{ color: "#fca311", fontWeight: "bold" }}>Номер телефона</span>} name="phone" rules={[{ required: true, message: "Введите номер телефона" }]}>
              <InputMask mask="+999-99-999-99-99" placeholder="+998 99 880 80-80" value={phone} style={{ height: 35, width: "95%" }} onChange={(e) => setPhone(e.target.value)} className="inp">
                {(inputProps) => <input className="custom-input" {...inputProps} />}
              </InputMask>
            </Form.Item>

            <Form.Item label={<span style={{ fontWeight: "bold" }}>Имя</span>} name="name" rules={[{ required: true, message: "Введите ваше имя" }]}>
              <Input prefix={<UserOutlined />} placeholder="Введите ваше имя" style={{ height: 20 }} className="inp" />
            </Form.Item>

            <Form.Item label={<span style={{ fontWeight: "bold" }}>Пароль</span>} name="password" rules={[{ required: true, message: "Введите пароль" }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Введите пароль" iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />} style={{ height: 35 }} className="inp" />
            </Form.Item>

            <Form.Item label={<span style={{ color: "#e63946", fontWeight: "bold" }}>Подтверждение пароля</span>} name="confirmPassword" dependencies={['password']} rules={[
              { required: true, message: "Подтвердите пароль" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) return Promise.resolve();
                  return Promise.reject(new Error("Пароли не совпадают"));
                },
              }),
            ]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Подтвердите пароль" iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />} style={{ height: 25 }} className="inp" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={btn} style={{ width: "100%", height: 35, backgroundColor: "#fca311", borderColor: "#fca311", borderRadius: 8, fontWeight: "bold" }}>Далее</Button>
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: 8, marginBottom: 35, fontSize: 14 }}>
              <Text>Уже есть аккаунт? </Text>
              <Link to="/login" style={{ color: "#fca311", fontWeight: "bold" }}>Войти</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
