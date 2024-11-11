import React, { useState, useEffect } from 'react';
import { Input, Button, Typography, Space, Card } from 'antd';
import img from '../img/Vector 8 (1).png';
import { Link } from 'react-router-dom';
const { Text } = Typography;

const LoginCode: React.FC = () => {
    const [code, setCode] = useState(Array(6).fill(''));
    const [timer, setTimer] = useState(108); // 1:48 in seconds

    // Handle input change
    const handleChange = (value: string, index: number) => {
        const newCode = [...code];
        newCode[index] = value.toUpperCase();
        setCode(newCode);

        if (value && index < code.length - 1) {
            const nextInput = document.getElementById(`code-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    const resendCode = () => {
        setCode(Array(6).fill(''));
        setTimer(108);
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    return (
        <div
            style={{
                backgroundColor: '#FFA500',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
             <Card
                style={{
                    
                    backgroundColor: '#ffffff',
                    color: '#999999',
                    padding: 20,
                    borderRadius: 10,
                    width: 400,
                    height: 400,
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >  <div style={{ position: "absolute", top:-1, left: -1, zIndex: 1, width: "102%", height: "50.1px", backgroundColor: "#FCA311CC" }}>
            <img style={{ width: "100%", marginTop: 50 }} src={img} alt="" />
          </div>
                  
                <Space direction="vertical" align="center"  style={{ width: '100%', zIndex: 100 }}>
                    <Text strong style={{ fontSize: 24, color: '#fff', zIndex: 100, position: 'relative' }}>Подтверждение номера</Text>
                   <br /><Link to="/login">
                   <Button
                        type="link"
                        style={{ color: '#999999', padding: 0 }}
                        onClick={() => console.log('Back clicked')}
                    >
                        ← Вернуться
                    </Button></Link>
                    <Text style={{ color: '#999999' }}>Введите код из SMS</Text>

                    <Space>
                        {code.map((value, index) => (
                            <Input className='inp'
                                key={index}
                                id={`code-input-${index}`}
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e.target.value, index)}
                                style={{
                                    width: 40,
                                    height: 50,
                                    textAlign: 'center',
                                    fontSize: '1.5em',
                                   
                                    borderColor: '#FFA500',
                                    fontWeight: 'bold',
                                }}
                            />
                        ))}
                    </Space>

                    <Text style={{ color: '#999999', fontSize: '0.9em' }}>
                        Не получили код?{' '}
                        <Button
                            type="link"
                            style={{ color: '#999999', padding: 0 }}
                            onClick={resendCode}
                        >
                            Отправить повторно
                        </Button>
                    </Text>
                    <Text style={{ color: '#999999', fontSize: '0.9em' }}>
                        Получить повторный код можно через {Math.floor(timer / 60)}:
                        {String(timer % 60).padStart(2, '0')}
                    </Text>

                    <Link to={"/"}>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            backgroundColor: '#FFA500',
                            borderColor: '#FFA500',
                            color: '#000000',
                            marginTop: 16,
                            width: '100%',
                            borderRadius: '5px',
                        }}
                        onClick={() => console.log('Submit clicked')}
                    >
                        Зарегистрироваться
                    </Button>
                    </Link>
              
                </Space>
                
            </Card>
        </div>
    );
};

export default LoginCode
