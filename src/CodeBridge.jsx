import React from "react";
import "./ProjectDetail.css";
import ProjectHeader from "./ProjectHeader";
import Footer from "./Footer";
const CodeBridge = () => {
  return (
    <div>
      <ProjectHeader />
      <div className="project-detail-area">
        <h2>CodeBridge</h2>
        <h3>目的・背景</h3>
        <p>
          ハッカソンに出場した際、私は「チームメンバーのスキルを把握するまでに時間がかかる」という課題を感じました。
          また、ChatGPTなど生成AIの進化により、GitHubのリポジトリを読み解きながら実装や学習を行うスタイルが、以前よりも取りやすくなってきたとも実感しました。そこで私は、「リポジトリを共有し、質問や議論ができるWebアプリ」を開発しました。
          このアプリでは、チーム開発におけるスキル共有の円滑化と、学習者同士が技術知識を共有し合える環境の実現を目指して制作しました。アプリの名前は
          「CodeBridge（コードブリッジ）」 です。
          その由来は、“プログラミング（コード）を通じて、人と人とをつなぐ架け橋になりたい”
          という想いから名付けました。
        </p>
        <h3>使用した技術</h3>
        <ul>
          <li>フロントエンド：React</li>
          <li>バックエンド：REST Framework、Express.js</li>
          <li>データベース：SQLite（Django側）、MongoDB（Express/Socket側）</li>
          <li>リアルタイム通信：Socket.io（Express）</li>
          <li>認証：JWT（JSON Web Token）</li>
          <li>AIモデル：PyTorch（BERTによる文章分類）</li>
        </ul>
        <h3>git hubリポジトリ</h3>
        <p>
          このアプリはフロントエンド・バックエンド・リアルタイム通信の3層構成で開発しています。
          それぞれの役割に応じて、以下のように技術を分けて使用しました。
        </p>

        <h4>React（フロントエンド）</h4>
        <p>
          ユーザーの操作画面（UI）や各機能のページ遷移を実装しました。
          デモ動画で表示しているすべての画面は、このReactアプリで構築しています。
        </p>
        <a href="https://github.com/NK-kimiya/repository_share_app_front.git">
          Reactのリポジトリはこちらから
        </a>
        <h4>Django REST Framework（バックエンドAPI）</h4>
        <p>
          ユーザー管理、ルーム管理、リポジトリ投稿、メッセージの保存、AI検索機能など、主要なデータ管理APIを担当しています。
        </p>
        <a href="https://github.com/NK-kimiya/repository_share_app_api.git">
          Djangoのリポジトリはこちらから
        </a>
        <h4>Express.js（リアルタイム通信＋通知管理）</h4>
        <p>
          Socket.ioを利用したリアルタイムメッセージ機能と、未読通知の送受信処理を担うバックエンドです。
          MongoDBと連携し、ユーザーとリポジトリごとの通知情報を管理しています。
        </p>
        <a href="https://github.com/NK-kimiya/repository_share_app_socket.git">
          Expressのリポジトリはこちらから
        </a>
        <h3>機能の紹介</h3>
        <p>
          このアプリには、開発時に感じた課題に対応するため、以下の機能を実装しています。
          各機能の説明とあわせて、画面のデモを掲載しています。
        </p>
        <h4>ユーザー認証（JWT）</h4>
        <p>
          アカウント作成・ログイン機能は、トークンベースで実装しました。
          JWT（JSON Web
          Token）を用いることで、フロントエンドとバックエンド間で安全に認証情報をやり取りし、ログイン状態を維持できるようにしています。
        </p>
        <h5>工夫した点</h5>
        <ul>
          <li>
            アカウント作成が成功した直後に、自動的にログイン処理を行うことで、スムーズなUXを目指しました。
          </li>
          <li>
            トークンの有効期限が切れた状態で、バックエンドへのリクエスト（ルームログインやリポジトリ一覧取得、カテゴリ検索など）を行おうとした場合、クッキーに保存されたトークンを削除し、自動的にログアウト処理を実行する仕組みを実装しました。
          </li>
          <li>
            これにより、ユーザーに不要な混乱を与えず、セキュリティと利便性を両立させた認証を目指しました。
          </li>
        </ul>
        <h5>デモ動画</h5>
        <p>説明のためのデモ動画として、下記のアカウントを作成します。</p>
        <ul>
          <li>kimikou-blog@gmail.com</li>
          <li>kimikoublog</li>
          <li>kimikoublog</li>
        </ul>
        <p>
          デモ動画には載せていませんが、他の機能の説明のため下記のアカウントも作成しました。
        </p>
        <ul>
          <li>メールアドレス：code-bridge@gmail.com</li>
          <li>ユーザー名：コードブリッジ</li>
          <li>パスワード：codebridge</li>
        </ul>
        <video controls>
          <source
            src="video/repository-share-app/login_1.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h4>ルーム機能</h4>
        <p>
          ルーム名とパスワードを入力することで、新しいルームを作成したり、既存のルームに参加できます。
          ハッカソンやチーム開発のようなグループ単位での情報共有を想定した設計です。
        </p>
        <h5>工夫した点</h5>
        <p>
          ルーム作成が成功した直後に、自動的にログイン処理を行うことで、スムーズなUXを目指しました。
        </p>
        <h5>デモ動画</h5>
        <p>説明のためのデモ動画として、下記のルームを作成します。</p>
        <ul>
          <li>ルーム名：コードブリッジ</li>
          <li>パスワード：codebridge</li>
        </ul>
        <p>
          デモ動画には載せていませんが、他の機能の説明のため下記のアカウントも作成しました。
        </p>
        <ul>
          <li>ルーム名：Python勉強会</li>
          <li>パスワード：pythonstudy</li>
        </ul>

        <video controls>
          <source
            src="video/repository-share-app/login_2.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h4>リポジトリ登録・カテゴリ分け</h4>
        <p>
          GitHubリポジトリのURL、タイトル、概要、デモ動画をリポジトリデータとして登録できます。カテゴリを複数選択して紐づけることで、目的別に絞り込み表示も可能です。
        </p>
        <video controls>
          <source
            src="video/repository-share-app/login_3.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h4>メッセージ投稿</h4>
        <h5>工夫した点</h5>
        <ul>
          <li>
            メッセージの投稿には Socket.io
            を使用し、他のユーザーにもリアルタイムで共有されるように実装しました。
          </li>
          <li>
            投稿されたメッセージは、他のユーザーに「未読」として通知が届くようにしています。
          </li>
          <li>
            「未読通知」もSocket通信によってリアルタイムで反映されるため、即時性のあるやり取りが可能です。
          </li>
          <li>
            他のユーザーがすでにそのリポジトリの詳細画面を開いている場合は、未読通知を送らない仕組みを導入し、不要な通知を減らす工夫をしました。
          </li>
        </ul>
        <h5>デモ動画</h5>
        <video controls>
          <source
            src="video/repository-share-app/login_4.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h4>お気に入り</h4>
        <p>
          リポジトリを「お気に入り」に追加・解除することができます。
          追加したリポジトリは、専用の「お気に入りページ」で確認でき、そこからメッセージのやり取りも可能です。
        </p>
        <h5>工夫した点</h5>
        <ul>
          <li>
            お気に入りページでは、入室しているルームに関係なく、他のルームで追加したお気に入りデータも一覧表示できるようにしました。
          </li>
          <li>
            お気に入りに登録したリポジトリのメッセージや通知は、リアルタイムで受信と送信ができるようにしました。
          </li>
          <li>
            この工夫により、複数ルームに参加しているユーザーでも、重要なリポジトリを常に追いやすくなることで、利便性の向上をめざしました。
          </li>
        </ul>

        <h5>デモ動画</h5>
        <video controls>
          <source
            src="video/repository-share-app/login_6.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h5>追加デモ動画</h5>
        <p>
          お気に入りにリポジトリデータを追加した場合の、メッセージや通知の送信と受信についての動作のデモ動画です。
        </p>
        <video controls>
          <source
            src="video/repository-share-app/login_7.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h3>BETA版：AI検索機能</h3>
        <p>
          「作りたいアプリの概要文」を自然文で入力すると、類似するリポジトリをAIが自動で提案してくれる機能です。
          現在は、事前に用意した5つのクラスに分類するシンプルな分類タスクとして構成しています。
        </p>
        <h5>今後の展望と改良点</h5>
        <p>
          現在の学習データは量が少なく、各クラスで
          語尾のスタイル（敬語／ため口）に偏り があるため、
          語尾や動詞を統一するなどテキストの正規化を進めながら、データセットの質を改善していく予定です。
          今後は学習データを増やし、一定の精度が出せた段階で クラス数の拡張
          も行っていきたいと考えています。
          また、現在学習中の強化学習を活かし、ユーザーからのフィードバックを元にBERTの分類精度を向上させる深層強化学習の導入も検討中です。
        </p>
        <h5>デモ動画</h5>
        <video controls>
          <source
            src="video/repository-share-app/ai-search.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default CodeBridge;
