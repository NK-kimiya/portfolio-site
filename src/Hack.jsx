import React from "react";
import "./ProjectDetail.css";
import ProjectHeader from "./ProjectHeader";
import Footer from "./Footer";
const Hack = () => {
  return (
    <div>
      <ProjectHeader />
      <div className="project-detail-area">
        <h2>Open Hack U 2023 ONLINE</h2>
        <h3>概要</h3>
        <ul>
          <li>受賞歴:最優秀賞・Happy Hucking賞</li>
          <li>チーム名：雛たち</li>
          <li>作品名：ポチナビ</li>
        </ul>
        <iframe
          class="video-frame"
          src="https://www.youtube.com/embed/PAsUW8Uk5JM?si=fZIpDCUN0apwXcU5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <a href="https://contest.japias.jp/tqj24/240313G/">作品</a>
        <a href="https://github.com/Naoya-Yasuda/HackU2023_project.git">
          チームのリポジトリ
        </a>
        <a href="https://hacku.yahoo.co.jp/hacku2023_online/">
          OPEN HACK U 2023 ONLINE
        </a>
        <h3>担当したこと</h3>
        <ul>
          <li>解決したい問題の定義から作りたいアプリの提案</li>
          <li>音声認識で目標とする物体のキーワードを抽出する機能</li>
          <li>音声認識から行きたい場所を抽出して道案内をする機能</li>
          <li>
            10フレーム分の物体検知情報から、目標物体を検知できたかを確認し、音声で知らせる。
          </li>
        </ul>

        <h3>難しかったこと・工夫したこと</h3>
        <p>
          Git
          Hub上の既存プロジェクトをベースにし、チームの目的に合わせてカスタマイズを行いました。使用したことのないフレームワークで構成されていたため、コードを理解するのに時間がかかり、改造する時間がとれませんでした。そこで、すべてのファイルを1つずつ丁寧に読み解くのではなく、ChatGPTを活用し、各ファイルがどういったことをしているのかといった大枠だけを理解するようにしました。その上で、改造対象となるファイルのみに焦点をあて、解析・理解するというアプローチで作業を進めました。
        </p>

        <h3>学んだこと</h3>
        <p>
          新しいフレームワークや既存のプロジェクトに対して、全てを最初から学ぼうとするのではなく、目的をもって必要な部分に絞って理解を深める方法がとても有効であることを学びました。
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Hack;
