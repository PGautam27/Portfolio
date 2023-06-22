import React from "react";
import GT from "../Assets/GChatt.png";
import Bp from "../Assets/bp.png";
import sos from "../Assets/sos.png";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const Projects = (props) => {
  return (
    <div className="w-full pb-[5rem]" id="project">
      <div className="text-center pt-[5rem] pb-[2rem]">
        <h1 className="uppercase font-bold text-3xl text-[#00df9a]">
          {!props.japan ? "My Projects" : "私のプロジェクト"}
        </h1>
      </div>
      <div className="max-w-[1240px]  mx-auto grid lg:grid-cols-3 gap-8">
        <div className="md:w-full shadow-xl w-[85%] justify-self-center items-center flex flex-col p-4 md:my-0 md:ms-0  my-8 rounded-lg hover:scale-105 duration-300">
          <Card
            padding="lg"
            radius="md"
            className="md:w-96 w-68  justify-self-center md:h-[29rem]"
            withBorder
          >
            <Card.Section>
              <Image src={Bp} height={160} alt="Bio pass" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text className="font-bold uppercase">
                {!props.japan ? "BioPass" : "バイオパス"}
              </Text>
              <Badge color="green" variant="light" className="text-[#00df9a]">
                {!props.japan ? "Completed" : "完成した"}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {!props.japan
                ? "This is a Chrome extension password manager that uses two-factor authentication using biometric methods such as fingerprint and face recognition. The extension is built using the Chrome extension manifest v3 and integrates with a mobile application built using Kotlin for performing biometric authentication."
                : "これはChrome拡張機能のパスワードマネージャーであり、指紋や顔認識などの生体認証を使用した二要素認証を行います。この拡張機能は、Chrome拡張機能マニフェストv3を使用して構築され、生体認証を実行するためにKotlinで作成されたモバイルアプリケーションと統合されています。"}
            </Text>

            <a href="https://github.com/Mr-DJ/biopass-extension">
              <Button
                variant="light"
                color="gray"
                className="text-black bg-[#00df9a] font-bold uppercase mt-14"
                fullWidth
                mt="md"
                radius="md"
              >
                {!props.japan ? "Check it up" : "チェックしてみてください"}
              </Button>
            </a>
          </Card>
        </div>
        <div className="md:w-full shadow-xl w-[85%] justify-self-center items-center flex flex-col p-4 md:my-0 md:mr-2 my-8 rounded-lg hover:scale-105 duration-300">
          <Card
            padding="lg"
            radius="md"
            className="md:w-96 w-68  justify-self-center md:h-[29rem]"
            withBorder
          >
            <Card.Section>
              <Image src={sos} height={160} alt="SOS" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{!props.japan ? "SOS" : "エスオーエス"}</Text>
              <Badge color="green" variant="light" className="text-[#00df9a]">
                {!props.japan ? "Completed" : "完成した"}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {!props.japan
                ? "Developed a robust full-stack mobile-to-server application leveraging Jetpack Compose and Kotlin for the Android application, and utilizing Node.js, Express.js, and MongoDB for the server-side infrastructure. Prioritized functionality and performance, integrating SMS Manager and Location Manager to enable accurate retrieval of current location details."
                : "Androidアプリケーションでは、Jetpack ComposeとKotlinを活用し、堅牢なフルスタックのモバイルからサーバーへのアプリケーションを開発しました。サーバーサイドのインフラストラクチャにはNode.js、Express.js、MongoDBを使用しました。機能性とパフォーマンスを優先し、SMSマネージャーと位置情報マネージャーを統合して、正確な現在の位置情報の取得を可能にしました。"}
            </Text>
            <a href="https://github.com/PGautam27/SOS/">
              <Button
                variant="light"
                color="green"
                className="text-[#00df9a] bg-black font-bold uppercase"
                fullWidth
                mt="md"
                radius="md"
              >
                {!props.japan ? "Check it up" : "チェックしてみてください"}
              </Button>
            </a>
          </Card>
        </div>
        <div className="md:w-full shadow-xl w-[85%] justify-self-center items-center flex flex-col p-4 md:my-0 md:ms-0  my-8 rounded-lg hover:scale-105 duration-300">
          <Card
            padding="lg"
            radius="md"
            className="md:w-96  w-68  justify-self-center md:h-[29rem]"
            withBorder
          >
            <Card.Section>
              <Image src={GT} height={160} alt="Norway" className="" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>
                {!props.japan ? "Get Chatting" : "ゲットチャット"}
              </Text>
              <Badge color="green" variant="light" className="text-[#00df9a] ">
                {!props.japan ? "Completed" : "完成した"}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              {!props.japan
                ? "Developed a streamlined and user-friendly chat application utilizing Firebase Realtime Database and Coroutines. With a strong emphasis on creating an intuitive user interface, the application seamlessly integrates Jetpack Compose and Kotlin to deliver a visually appealing and interactive experience."
                : "Firebase Realtime DatabaseとCoroutinesを利用した、効率的で使いやすいチャットアプリを開発しました。直感的なユーザーインターフェースの作成に重点を置き、Jetpack ComposeとKotlinをシームレスに統合して、視覚的に魅力的でインタラクティブな体験を提供します。"}
            </Text>
            <a href="https://github.com/PGautam27/Get-Chatting">
              <Button
                variant="light"
                color="gray"
                className="text-black bg-[#00df9a] font-bold uppercase mt-[16%]"
                fullWidth
                mt="md"
                radius="md"
              >
                {!props.japan ? "Check it up" : "チェックしてみてください"}
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
