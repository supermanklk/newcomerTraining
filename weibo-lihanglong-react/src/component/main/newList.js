/*
 * @Description  :
 * @Version      : 1.0
 * @Author       : 李航龙
 * @Date         : 2021-03-12 14:37:08
 * @LastEditors  : 李航龙
 * @LastEditTime : 2021-03-12 18:13:34
 * @FilePath     : \\newcomerTraining\\weibo-lihanglong-react\\src\\component\\main\\newList.js
 * Copyright (C) 2021 李航龙. All rights reserved.
 */
import React, { Component } from "react";
import "./newList.css";

class NewList extends Component {
  handleClick(index) {
    console.log(index);
    if (index === 5) {
      window.location.href = "http://localhost:3000/#/news";
      console.log("跳转页面");
    }
  }

  render() {
    const newsList = [
      { content: "总书记这些话直抵人心", tag: "热", num: "" },
      { content: "总理记者会", tag: "沸", num: "1315031" },
      { content: "代表建议种牙纳入医保", tag: "沸", num: "964567" },
      { content: "陶勇说应将学生视力纳入教育卫生考相", tag: "", num: "743314" },
      { content: "香港警察踢正步配分列式进行曲", tag: "新", num: "742075" },
      { content: "中国灵活就业已涉及2亿多人", tag: "沸", num: "783293" },
      { content: "共享充电宝每小时从1元涨至4元", tag: "新", num: "741360" },
      { content: "60多个国家将中国公民纳入疫苗接种体系", tag: "新", num: "" },
      { content: "今年高校毕业生909万创历史新高", tag: "沸", num: "964567" },
      { content: "总理叮嘱青年学生打牢基本功", tag: "", num: "739537" },
      { content: "连淮伟解脱舞台", tag: "新", num: "738915" },
    ];
    return (
      <div className="newsList">
        {newsList.map((item, index) => {
          return (
            <div
              className="news"
              key={index}
              onClick={() => this.handleClick(index)}
            >
              <div className="left">
                <div
                  className={["num-icon", index < 4 ? " wei-style" : null].join(
                    ""
                  )}
                >
                  {index > 0 ? index : ""}
                </div>
                <div className="content">{item.content}</div>
                <div className="num">{item.num}</div>
              </div>
              <div
                className={[
                  "tag",
                  item.tag === "热" ? " re" : null,
                  item.tag === "沸" ? " fei" : null,
                  item.tag === "新" ? " xin" : null,
                ].join("")}
              >
                {item.tag}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewList;
