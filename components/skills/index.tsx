/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./index.module.scss";

import React from "react";

import Image from "next/image";
import Js from "../../src/media/js-code.png";

import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <>
      <div className={styles.container} id="skills">
        <div className={styles.main}>
          <div className={styles.table}>
            <h1>Skills</h1>
            <table>
              <tr>
                <td>HTML</td>
                <td>
                  <ProgressBar
                    completed={80}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>
                  <ProgressBar
                    completed={80}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>
                  <ProgressBar
                    completed={60}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>
                  <ProgressBar
                    completed={70}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>React</td>
                <td>
                  <ProgressBar
                    completed={20}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td>
                  <ProgressBar
                    completed={20}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>Next.js</td>
                <td>
                  <ProgressBar
                    completed={20}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
              <tr>
                <td>C#</td>
                <td>
                  <ProgressBar
                    completed={40}
                    width="450px"
                    bgColor="cyan"
                    labelColor="black"
                    baseBgColor="#252525"
                  />
                </td>
              </tr>
            </table>
          </div>

          <Image src={Js} alt="javascript code" className={styles.image} />
        </div>

        <div className={styles.text}>
          <p>
            I am improving and expanding my skills, and it's unfortunate that I
            cannot showcase a project online. I can only display a few projects
            on my GitHub, where you can also find the portfolio website that I
            created myself called portfolio2.0.
          </p>
        </div>
      </div>
    </>
  );
}
