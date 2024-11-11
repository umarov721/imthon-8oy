import React from "react";
import { Collapse, Select, Radio, Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import "../../App.css";

import Utopia from "../img/full-logo-to-home.png";

const { Panel } = Collapse;

const Sidebar: React.FC = () => {
  const a = (
    <Menu>
      <Menu.Item style={{}} key="Продажа">
        Продажа
      </Menu.Item>
      <Menu.Item key="Дом">Дом</Menu.Item>
      <Menu.Item key="Площадка">Площадка</Menu.Item>
    </Menu>
  );

  const b = (
    <Menu>
      <Menu.Item key="Аренда">Аренда</Menu.Item>
      <Menu.Item key="Квартира">Квартира</Menu.Item>
      <Menu.Item key="Дом">Дом</Menu.Item>
      <Menu.Item key="Площадка">Площадка</Menu.Item>
    </Menu>
  );

  const c = (
    <Menu>
      <Menu.Item key="Сожит">Сожит.</Menu.Item>
      <Menu.Item key="Квартира соджит">Квартира соджит</Menu.Item>
      <Menu.Item key="Дом соджит">Дом соджит</Menu.Item>
      <Menu.Item key="Площадка соджит">Площадка соджит</Menu.Item>
    </Menu>
  );

  return (
    <aside
      className="sidebar"
      style={{
        zIndex: 1000,
        width: "220px",
        height: "100%",
        padding: "0 20px 20px 20px",
      }}
    >
      <div></div>
      <img
        src={Utopia}
        alt="Utopia.svg"
        style={{
          width: "150px",
          height: "37px",
          marginTop: "100px",
          marginBottom: "23px",
        }}
      />
      <hr
        style={{
          width: "220px",
          height: "0.1px",
          backgroundColor: "rgba(238, 238, 238, 1)",
          marginBottom: "33px",
        }}
      />

      <h3 className="sidebar__title">Фильтр</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Dropdown overlay={a}>
            <Button
              style={{
                width: "70px",
                height: "45px",
                backgroundColor: "#f2f2f2",
                color: "rgba(154, 154, 154, 1)",
                border: "none",
                marginLeft: "-5px",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                Продажа
              </p>
              <div
                style={{
                  width: "1px",
                  height: "28px",
                  border: "1px solid #5D5D5D",
                }}
              ></div>
              <DownOutlined
                style={{
                  width: 11,
                  height: 5,
                  color: "#5D5D5D",
                  fontFamily: "sans-serif",
                  fontSize: "11px",
                  marginLeft: "-5px",
                }}
              />
            </Button>
          </Dropdown>
          <Dropdown overlay={b}>
            <Button
              style={{
                width: "70px",
                height: "45px",
                backgroundColor: "#f2f2f2",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                Аренда
              </p>
              <div
                style={{
                  width: "1px",
                  height: "28px",
                  border: "1px solid #5D5D5D",
                }}
              ></div>
              <DownOutlined
                style={{
                  width: 11,
                  height: 5,
                  color: "#5D5D5D",
                  fontFamily: "sans-serif",
                  fontSize: "11px",
                  marginLeft: "-5px",
                }}
              />
            </Button>
          </Dropdown>
          <Dropdown overlay={c}>
            <Button
              style={{
                width: "70px",
                height: "45px",
                backgroundColor: "#f2f2f2",
                color: "rgba(154, 154, 154, 1)",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                Сожит.
              </p>
              <div
                style={{
                  width: "1px",
                  height: "28px",
                  border: "1px solid #5D5D5D ",
                }}
              ></div>
              <DownOutlined
                style={{
                  width: 11,
                  height: 5,
                  color: "#5D5D5D",
                  fontFamily: "sans-serif",
                  fontSize: "11px",
                  marginLeft: "-5px",
                }}
              />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          backgroundColor: "#f2f2f2",
          marginTop: "20px",
        }}
      >
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Область" key="4">
            <Select placeholder="Выберите область" style={{ width: "100%" }}>
              <Select.Option value="fargona">fargona</Select.Option>
              <Select.Option value="tashkent">tashkent</Select.Option>
            </Select>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px", backgroundColor: "#f2f2f2" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Район" key="5">
            <Select placeholder="Выберите район" style={{ width: "100%" }}>
              <Select.Option value="toshkent">toshkent</Select.Option>
              <Select.Option value="quqon">quqon</Select.Option>
            </Select>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px", backgroundColor: "#f2f2f2" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Рядом" key="6">
            <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
              <Radio value="yes">Да</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px", backgroundColor: "#f2f2f2" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Ремонт" key="9">
            <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
              <Radio value="yes">Евроремонт</Radio>
              <Radio value="no">Без ремонта</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px", width: "100%", display: "flex", justifyContent:"end" }}>
        <Button
          type="primary"
          style={{
            backgroundColor: "#fca212",
            alignContent: "end",
            width: "100px",
          }}
          className="sidebar__apply-btn"
        >
          Применить
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
