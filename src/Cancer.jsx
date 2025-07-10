import React from "react";
import "./ProjectDetail.css";
import ProjectHeader from "./ProjectHeader";
import Footer from "./Footer";
const Cancer = () => {
  return (
    <div>
      <ProjectHeader />
      <div className="project-detail-area">
        <h2>白血病癌の診断システム</h2>
        <h3>目的・背景</h3>
        <p>
          医師は多数の患者を同時に担当することが多く、限られた時間の中で診断結果を精査し、治療の優先度を判断する必要があると考えました。
          そこで、診断結果の進行度に基づいて患者情報を整理・絞り込める機能を実装することで、短時間でより的確な判断と対応を支援することを目的としたアプリを制作しました。
          本アプリは、Kaggleにて公開されている Obuli Sai Naren 氏による「Multi
          Cancer Dataset」を使用しています。このデータセットは CC BY-NC-SA
          4.0（表示・非営利・継承） ライセンスのもとで提供されています。
        </p>
        <a href="https://www.kaggle.com/datasets/obulisainaren/multi-cancer">
          https://www.kaggle.com/datasets/obulisainaren/multi-cancer
        </a>
        <h4>工夫した点</h4>
        <h5>ユーザー権限の設計</h5>
        <p>
          管理者・医師・検査技師それぞれの立場に応じて操作可能な機能を明確に分離し、誤操作や情報漏洩を防ぐよう設計しました。これにより、システムの安全性と使いやすさの両立を図りました。
        </p>
        <h5>医師の業務効率化を意識したフィルタ機能</h5>
        <p>
          医師アカウントでは、AIが予測した診断結果（白血病の進行度）に応じて担当患者を絞り込み表示できるようにし、限られた時間の中でも重症度の高い患者に迅速に対応できるよう工夫しました。
        </p>
        <h5>問題点</h5>
        <p>
          今回はKaggleの公開データセット（約20,000枚）を用いてモデルの学習を行い、高い精度（約100%）を達成しましたが、これは同一データセット内での評価結果であり、実際の運用環境での汎用性が担保されていない可能性があります。
          また、現場で使用される医療機材や撮影条件が異なる場合、モデルの性能が低下するリスクも想定されます。
        </p>
        <h5>改善点・今後の課題</h5>
        <p>
          過学習の検出と防止のため、検証データの導入による早期終了（EarlyStopping）やDropoutの実装を通じて、モデルの一般化性能の向上に取り組む必要があると考えました。また、現場データを用いた評価・再学習を行うことで、現場の画像特性に適応したモデル構築を行う必要があります。実用化のためには、現場の医療機材で取得されたデータセットの収集・ラベリング体制も検討し、より実用性の高いシステムにする必要があると感じました。
        </p>
        <h3>技術スタック・構成</h3>
        <ul>
          <li>Django を用いた Web アプリケーション（医療画像分類サービス）</li>
          <li>
            ユーザー権限別のログイン認証とダッシュボード機能（医師 / 検査技師）
          </li>
          <li>
            PyTorch による画像分類モデルと連携し、患者画像の AI 推論を実現
          </li>
          <li>Pillow や torchvision による画像前処理パイプラインを実装</li>
          <li>
            ユーザーが画像をアップロードすると、その場でAIが分類を行い、結果をリアルタイムで表示します（Django同期処理
            + PyTorchモデル）
          </li>
        </ul>
        <h4>git hubリポジトリ</h4>
        <a href="https://github.com/NK-kimiya/cancer-classification-portfolio">
          https://github.com/NK-kimiya/cancer-classification-portfolio
        </a>
        <h4>機能の紹介</h4>
        <p>
          このアプリでは、課題に対応するため、以下の機能を実装しています。各機能の説明と合わせて、デモを掲載しています。
        </p>
        <h5>管理ユーザー機能</h5>
        <p>
          管理ユーザーがログインすると、「患者」、「医師」、「検査技師」のデータを一覧で確認、作成することができます。
        </p>
        <video controls>
          <source
            src="video/cancer-classification-app/2025-06-14-16-32-32.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>
        <h5>検査技師の診断画像アップロード機能</h5>
        <p>
          検査技師のアカウントでログインをすると、患者をカルテ番号から絞り込み急性リンパ性白血病の診断画像をアップロードすることができ、AIによって進行度を予測し、最新の診断結果をデーターベースに保持します。
        </p>
        <video controls>
          <source
            src="video/cancer-classification-app/02.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>

        <h5>進行度で絞り込み機能</h5>
        <p>
          医師のアカウントでログインをすると、担当患者が一覧表示され、診断画像で予測した進行度で患者を絞り込むことができます。
        </p>

        <video controls>
          <source
            src="video/cancer-classification-app/03.mp4"
            type="video/mp4"
          />
          お使いのブラウザは video タグをサポートしていません。
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default Cancer;
