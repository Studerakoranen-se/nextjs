import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import SurahViewSideBar from "../../components/SurahViewSideBar";
import { useRouter } from "next/router";
import axios from "axios";
import { IoMdPlay } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { BsBookHalf, BsThreeDots } from "react-icons/bs";

const SurahViewPage = (props: any) => {
  const router = useRouter();
  const chpID = router.query.chapter_id;

  const [chapter, setChapter] = useState<any>([]);
  const [chapterInfo, setChapterInfo] = useState<any>([]);

  useEffect(() => {
    // if (!chpID) {
    //   router.back();
    //   return;
    // }
    if (chpID) {
      axios
        .get(
          "https://api.quran.com/api/v3/chapters/" +
            chpID +
            "/verses?recitation=1&translations=21&language=en&text_type=words"
        )
        .then(({ data }) => setChapter(data));

      axios
        .get("https://api.quran.com/api/v3/chapters/" + chpID)
        .then(({ data }) => setChapterInfo(data.chapter));
    }
  }, [chpID]);

  return (
    <>
      <Head>
        <title>Surah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative font-inter bg-color1 flex flex-col min-h-screen scroll-smooth">
        <TopBar />
        <NavBar />
        <div className="flex">
          <SurahViewSideBar chpID={chpID} />
          <div className="flex-grow container px-5 py-10">
            {chapterInfo.bismillah_pre ? (
              <svg
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="45"
                viewBox="0 0 176 36"
                overflow="inherit"
                className="mx-auto text-white"
              >
                <switch>
                  <g>
                    <path
                      fill="currentColor"
                      d="M165.716 11.67c-.586-.089-1.021-.134-1.306-.134-.277 0-.644.273-1.099.818-.391.472-.586.781-.586.928a.217.217 0 0 0 .03.061c.012.016.03.024.055.024.008 0 .09-.063.244-.189s.301-.189.439-.189c.969 0 1.64.094 2.014.281-.357.26-.943.521-1.757.781-.659.211-.981.354-.965.427.024.081.366.094 1.025.037.651-.057 1.099-.143 1.343-.256.31-.146.667-.464 1.074-.952.439-.521.659-.932.659-1.233.002-.148-.389-.282-1.17-.404zm1.953 6.835c-.024 0-.092.13-.201.391-.11.26-.279.391-.507.391-.334 0-.501-.203-.501-.611 0-.179.051-.429.153-.75.102-.321.152-.535.152-.641 0-.065-.021-.105-.062-.122-.138-.073-.321.191-.549.793-.22.57-.329.989-.329 1.257 0 .277.081.546.243.807.188.284.411.427.672.427.342 0 .614-.179.817-.537.171-.301.257-.639.257-1.013.001-.277-.047-.408-.145-.392zm4.571 9.026c-.533-.271-.856-.408-.971-.408-.057 0-.207.258-.451.775-.244.516-.366.836-.366.958 0 .057.262.235.787.537.524.301.84.451.946.451.089 0 .254-.269.494-.806.239-.537.359-.879.359-1.025.001-.048-.266-.208-.798-.482zm2.203 3.449c-.058-.025-.92.346-2.588 1.11-1.701.781-2.648 1.257-2.844 1.429-.163.138-.362.361-.599.671-.284.366-.427.614-.427.745 0 .016.008.027.024.036-.073 0 .765-.411 2.515-1.233.919-.432 1.814-.846 2.685-1.244.163-.106.407-.338.732-.696.351-.391.525-.651.525-.781.002-.017-.007-.029-.023-.037zm-1.025-13.061c-1.074-2.034-1.733-3.051-1.978-3.051-.236 0-.354.504-.354 1.514 0 .35.04.785.122 1.306.089.545.166.818.231.818.122 0 .184-.403.184-1.208.398.529.956 1.489 1.672 2.881.789 1.529 1.184 2.502 1.184 2.917 0 .285-.211.428-.635.428-.301 0-.667-.062-1.099-.184-.488-.13-.817-.28-.988-.451.073-.488.041-.749-.098-.781-.114-.024-.293.265-.537.866-.244.603-.443.903-.598.903-.586 0-1.07-.142-1.453-.427.154-.521.244-.83.269-.928 0-.098-.028-.167-.085-.208-.106-.032-.257.114-.452.44-.261.438-.513.752-.757.939-.333.26-.813.391-1.44.391-.724 0-1.114-.057-1.171-.172.122-.072.237-.235.348-.488.109-.252.164-.459.164-.622 0-.098-.028-.15-.085-.158-.073-.017-.188.069-.342.256a2.502 2.502 0 0 1-.684.586c-.911.521-4.374 1.11-10.388 1.771-2.913.316-6.615.598-11.107.842-4.825.26-9.085.391-12.779.391-7.683 0-14.961-.342-21.837-1.025-2.971-.293-4.932-.537-5.884-.732-2.449-.496-4.142-1.266-5.078-2.307-.431-.48-.748-.717-.951-.708-.424.017-.854.415-1.294 1.196-.407.707-.61 1.298-.61 1.77 0 .326.187.659.562 1.001-2.222 1.603-3.942 2.815-5.163 3.638-.334.22-.484.357-.452.415.008.024.037.036.086.036.366 0 1.172-.252 2.416-.756 1.245-.506 2.011-.888 2.295-1.148.488-.447.903-1.082 1.245-1.904.269.18.738.362 1.41.55.671.187 1.166.272 1.482.257.098-.009.229-.257.391-.745 2.312.554 5.619 1.038 9.924 1.452 2.922.285 6.689.525 11.303.721 4.158.179 7.52.269 10.083.269 3.011 0 7.12-.163 12.328-.488 4.979-.31 9-.64 12.06-.989 4.833-.553 7.999-1.191 9.496-1.916a1.735 1.735 0 0 0-.085.439c0 .326.618.488 1.854.488.854 0 1.575-.342 2.161-1.025.586.473 1.232.708 1.94.708.398 0 .798-.603 1.196-1.807.212.188.582.432 1.11.732.627.358 1.059.537 1.294.537.236 0 .493-.179.77-.537.357-.472.537-1.082.537-1.831 0-1.052-.578-2.673-1.733-4.862zM96.61 4.59c-.109-.122-.229-.183-.359-.183-.847 0-1.567.635-2.161 1.904-.139-.008-.313-.063-.524-.165-.212-.102-.366-.152-.464-.152-.317 0-.647.22-.988.659-.31.399-.465.72-.465.964 0 .082.033.122.098.122.033 0 .161-.132.385-.397.224-.264.417-.396.58-.396.13 0 .34.071.629.213.288.143.563.214.823.214.684 0 1.29-.232 1.819-.696.528-.464.793-1.033.793-1.709a.566.566 0 0 0-.166-.378zm-1.788 10.669a1763.66 1763.66 0 0 0-.977-4.492c-.252-1.253-.406-1.879-.464-1.879-.235 0-.354.85-.354 2.551l.744 3.271c.529 2.278.858 3.812.989 4.601l.293 2.063c.105.7.183 1.05.231 1.05.236 0 .354-.766.354-2.295.003-.708-.271-2.332-.816-4.87zM85.998 6.91a7.41 7.41 0 0 0-.391 1.135c.879.968 1.363 2.079 1.453 3.332.024.366.061.549.109.549.18 0 .269-.435.269-1.306 0-1.383-.48-2.62-1.44-3.71zm2.514 6.298c-.081-.504-.188-.752-.317-.745-.105 0-.146.138-.122.415.032.326.024.529-.024.61a.632.632 0 0 1-.366.159c-.162.017-.276-.024-.342-.122-.032-.057-.057-.228-.073-.513-.008-.228-.053-.342-.134-.342-.082.017-.139.159-.171.427-.041.35-.077.562-.11.635-.105.236-.321.378-.646.427-.244 0-.395-.143-.452-.427 0-.089.028-.222.085-.397.057-.175.085-.303.085-.384 0-.065-.024-.11-.073-.134-.008-.008-.021-.012-.037-.012-.098 0-.236.24-.415.72-.13.342-.179.635-.146.879.073.578.391.838.952.781.293-.024.59-.228.891-.61.122.114.293.171.513.171.627 0 .94-.375.94-1.123a2.7 2.7 0 0 0-.038-.415zm-10.4-8.911c-.854 0-1.583.635-2.185 1.904-.114-.016-.279-.08-.494-.189-.216-.11-.38-.165-.495-.165-.301 0-.626.228-.977.684-.317.415-.476.741-.476.977 0 .089.032.134.098.134.041 0 .175-.134.402-.403.228-.269.427-.403.598-.403.123 0 .33.065.623.195s.559.196.794.196c.684 0 1.282-.22 1.794-.659.545-.472.818-1.042.818-1.709.001-.374-.166-.562-.5-.562zm13.793 16.82-1.953-5.053c-.057-.139-.114-.208-.171-.208-.017.008-.041.114-.073.317-.098.602-.146.976-.146 1.123 0 .391.336 1.402 1.007 3.033.672 1.632 1.008 2.565 1.008 2.802 0 .163-.139.244-.415.244a2 2 0 0 1-.317.024 1.862 1.862 0 0 1-1.526-.732c-.285-.358-.603-1.258-.952-2.697a485.636 485.636 0 0 1-.671-2.918c-.122-.521-.229-.781-.317-.781-.285.537-.428 1.046-.428 1.526 0 .114.062.407.184.879.423 1.644.635 2.707.635 3.186 0 .603-.24 1.074-.721 1.415-.423.302-.948.452-1.574.452-.977 0-1.53-.472-1.66-1.416-.049-.35-.073-1.126-.073-2.331 0-.659-.024-.989-.073-.989-.139 0-.269.273-.391.818a2.77 2.77 0 0 0-.073.599c0 .049-.354.24-1.062.573-.854.407-1.513.851-1.977 1.33-.277.285-.533.725-.769 1.318-.155.374-.057.655.293.843.26.139.598.207 1.013.207.903 0 1.501-.199 1.794-.598.024-.025.122-.191.293-.501.114-.212.232-.35.354-.415.033.773.183 1.339.452 1.697.439.586 1.042.879 1.807.879.806 0 1.465-.33 1.978-.989.276-.35.483-.769.622-1.257.098-.326.171-.518.22-.574.024.017.077.188.159.513.105.415.244.761.415 1.038.146.236.402.445.769.629.366.183.696.273.989.273.626 0 1.078-.346 1.354-1.037.138-.342.208-.875.208-1.599-.004-.715-.074-1.256-.212-1.623zm-10.247-7.665c-.542-.496-1.121-.745-1.739-.745-.261 0-.391.167-.391.5 0 .301.093.513.281.635-.09.236-.134.553-.134.952 0 .472.269.752.806.842-.285.407-.753.842-1.404 1.306a86.19 86.19 0 0 1-1.367.928c-.497.334-.724.545-.684.635.016.041.061.061.134.061.22 0 .626-.163 1.221-.488.562-.309 1.005-.59 1.331-.842.513-.398.984-.919 1.416-1.562.106 0 .271.047.495.14.224.094.376.14.458.14.261 0 .391-.28.391-.842-.002-.61-.273-1.163-.814-1.66zm15.679 16.075c-.203 0-.899.285-2.087.854-1.156.554-1.859.928-2.112 1.123-.398.399-.646.659-.744.781-.261.325-.366.524-.317.599.008.008.024.012.049.012a69.57 69.57 0 0 0 1.465-.793 95.53 95.53 0 0 1 2.941-1.404c.105-.081.269-.271.488-.567.22-.298.33-.494.33-.592 0-.009-.005-.013-.013-.013zM75.781 12.952c-.415-2.278-.639-3.548-.671-3.808-.073-.57-.154-.854-.244-.854-.041 0-.14.476-.299 1.428-.159.952-.222 1.514-.189 1.685.643 3.678 1.099 6.27 1.367 7.775.179 1.05.346 2.579.5 4.589.016.213.073.318.171.318.122 0 .183-.069.183-.208.154-.813.204-1.993.146-3.54-.057-1.701-.378-4.163-.964-7.385zm-5.859-7.556c-.049-.016-1.086.439-3.112 1.367-2.059.944-3.21 1.509-3.455 1.697-.146.114-.342.333-.586.659-.269.35-.403.59-.403.72 0 .024.008.037.024.037-.114 0 .712-.411 2.478-1.233 1.505-.7 2.775-1.278 3.808-1.733.163-.098.413-.336.751-.714.337-.378.506-.636.506-.775.001-.008-.003-.017-.011-.025zm-1.38 5.761c-.106-.569-.236-.842-.39-.818-.082.017-.123.085-.123.208 0 .082.012.202.037.36.024.159.037.279.037.36 0 .407-.171.61-.513.61a.33.33 0 0 1-.317-.195c-.024-.049-.062-.248-.11-.598-.041-.276-.102-.407-.183-.391-.09.017-.151.171-.183.464a8.914 8.914 0 0 1-.098.708c-.082.261-.305.411-.671.452-.261.065-.423-.077-.488-.427a1.056 1.056 0 0 1 .037-.403 2.17 2.17 0 0 0 .073-.415c0-.089-.024-.146-.073-.171-.017 0-.029-.004-.037-.012-.09 0-.232.265-.427.793-.09.391-.114.708-.073.952a.936.936 0 0 0 .366.623.842.842 0 0 0 .696.159c.447-.082.752-.305.916-.671a.788.788 0 0 0 .634.293c.635 0 .952-.427.952-1.282 0-.179-.021-.379-.062-.599zm11.536 16.4c-1.18.573-1.88.958-2.1 1.153-.448.398-.708.647-.781.744-.26.334-.354.537-.281.61a.052.052 0 0 0 .037.013c.049 0 .224-.09.525-.269.423-.252.732-.428.928-.525a216.721 216.721 0 0 1 2.966-1.416c.26-.195.5-.427.72-.695.269-.317.297-.477.085-.477-.22 0-.92.287-2.099.862zM59.547 7.3c-.586-.089-1.025-.134-1.318-.134-.277 0-.643.276-1.099.83-.399.48-.598.785-.598.916a.194.194 0 0 0 .037.048.08.08 0 0 0 .061.024c.016 0 .1-.062.25-.189.15-.126.291-.189.421-.189.195 0 .545.037 1.05.11.545.081.867.15.964.208-.358.244-.94.496-1.746.757-.659.211-.985.35-.977.415.024.057.167.085.427.085.83 0 1.477-.102 1.941-.305.301-.13.663-.444 1.086-.94.456-.521.684-.924.684-1.208.001-.164-.394-.306-1.183-.428zM72.4 16.271c-.57-3.222-.854-4.858-.854-4.907.26-.781.391-1.204.391-1.27-.008-.032-.082-.098-.22-.195-.383-.269-.598-.7-.647-1.294-.024-.261-.065-.391-.122-.391-.114 0-.252.293-.415.879-.146.529-.22.907-.22 1.135 0 .342.094.639.281.891l1.001 5.419c.651 3.516.977 5.525.977 6.03 0 .553-.464.83-1.392.83-.212 0-.362-.021-.452-.062a6.783 6.783 0 0 1-.769-.769c-.211.61-.403 1.232-.574 1.867.497.334.745.725.745 1.172 0 .285-.309.732-.928 1.343-1.286 1.27-2.754 1.904-4.406 1.904-.26 0-.647-.036-1.16-.11a8.954 8.954 0 0 0-1.147-.109c-.122 0-.183.032-.183.098 0 .146.277.361.83.646a8.06 8.06 0 0 0 1.233.537c.952.326 1.624.488 2.014.488.683 0 1.518-.464 2.502-1.391 1.123-1.059 1.798-2.242 2.026-3.553.781 0 1.375-.357 1.782-1.074.342-.586.513-1.298.513-2.136 0-.948-.269-2.942-.806-5.978zm-19.261-8.47c-.155.35-.285.724-.391 1.123.545.594.932 1.229 1.159 1.904.13.399.22.875.269 1.428.032.375.073.562.122.562.188 0 .281-.435.281-1.306 0-1.384-.48-2.621-1.44-3.711zM50.38 4.334c-.822 0-1.542.635-2.16 1.904-.146-.008-.324-.069-.531-.183-.208-.114-.36-.171-.458-.171-.317 0-.647.224-.989.671-.31.399-.464.729-.464.989 0 .089.037.134.11.134.041 0 .171-.134.391-.403s.407-.403.562-.403c.138 0 .352.065.641.195.289.13.56.195.812.195.692 0 1.3-.226 1.825-.678.525-.451.787-1.015.787-1.69-.001-.373-.177-.56-.526-.56zm2.325 10.791c-.525-.293-.84-.439-.946-.439-.082 0-.208.24-.378.72-.171.48-.256.793-.256.939 0 .122.23.33.69.623.459.292.758.439.897.439.081 0 .232-.264.452-.793s.33-.854.33-.976c-.001-.05-.264-.221-.789-.513zm-4.095-2.1c-.383-1.847-.631-3.121-.745-3.821-.089-.537-.183-.805-.281-.805-.041 0-.13.478-.268 1.434-.139.956-.191 1.516-.159 1.678a860.271 860.271 0 0 0 1.379 7.031c.211 1.14.403 2.669.574 4.59.049.212.118.317.208.317.065 0 .122-.082.171-.244.13-.847.155-2.014.073-3.504-.098-1.83-.415-4.056-.952-6.676zm-8.129-1.55c-.106-.569-.236-.842-.391-.818-.082.017-.122.085-.122.208 0 .082.014.202.042.36s.043.279.043.36c0 .407-.175.61-.525.61-.139 0-.244-.065-.317-.195a12.877 12.877 0 0 1-.085-.476l-.012-.122c-.041-.269-.102-.398-.183-.391-.098.017-.163.171-.195.464-.041.432-.069.667-.085.708-.082.261-.305.411-.671.452-.261.065-.427-.073-.5-.415-.017-.081-.002-.226.043-.433.044-.208.067-.344.067-.409 0-.089-.024-.15-.073-.183-.09-.049-.244.22-.464.806-.09.35-.11.667-.061.952.081.529.362.793.842.793.529 0 .907-.228 1.135-.684a.753.753 0 0 0 .623.293c.635 0 .952-.427.952-1.282a3.583 3.583 0 0 0-.063-.598zm15.422 17.552c-1.176.562-1.874.939-2.093 1.135a7.49 7.49 0 0 0-.745.781c-.277.334-.383.533-.317.598.008 0 .513-.26 1.514-.781a94.169 94.169 0 0 1 2.941-1.402c.285-.229.525-.461.72-.696.26-.317.289-.476.085-.476-.227 0-.929.28-2.105.841zM44.667 13.708c-.659-3.613-1.079-5.383-1.257-5.31-.22.089-.395.691-.525 1.806a17.57 17.57 0 0 0-.146 2.039c0 1.359.065 2.576.195 3.65.114.96.228 1.44.342 1.44.057 0 .085-.24.085-.72l-.073-2.587c-.024-1.196-.004-2.095.061-2.698l.891 4.651c.513 2.685.769 4.281.769 4.785 0 .252-.261.428-.781.525-.472.089-.802.094-.989.012-.309-.229-.533-.419-.671-.574-.269-.179-.48.033-.635.635-.163.595-.126 1.01.11 1.246.537.422.806.821.806 1.195 0 .619-.496 1.335-1.489 2.148-1.042.854-2.018 1.281-2.929 1.281-.912 0-1.546-.293-1.904-.879-.179-.293-.297-.756-.354-1.391-.049-.537-.106-.807-.171-.807-.171 0-.256.334-.256 1.002 0 .635.118 1.221.354 1.758.594 1.342 1.57 2.014 2.93 2.014 1.123 0 2.177-.68 3.161-2.039.928-1.277 1.371-2.461 1.331-3.552.83-.073 1.412-.407 1.746-1.001.252-.455.378-1.143.378-2.062-.002-.83-.328-3.019-.979-6.567zm-14.452-6.2c-6.274 1.57-10.225 2.75-11.852 3.54-.79.383-1.433.863-1.929 1.44-.399.464-.598.814-.598 1.05 0 .049.021.073.061.073-.016-.008.171-.142.562-.403.545-.366 1.298-.732 2.258-1.099 2.596-.993 5.989-1.994 10.18-3.002 4.28-1.034 8.78-2.071 13.5-3.113.529-.545.985-1.042 1.367-1.489-3.214.545-7.73 1.546-13.549 3.003zm35.325 8.593c-.407-.163-1.249-.578-2.527-1.245-.675-.35-1.293-.525-1.855-.525-1.058 0-1.791.5-2.197 1.501-.049.171-.094.342-.134.512a23.147 23.147 0 0 1 1.575-.061c.586 0 1.062.032 1.428.098.439.122 1.038.333 1.794.634-2.628.35-4.357.916-5.188 1.697-.204.188-.497.586-.879 1.196-.366.569-.627.915-.781 1.038-.358.284-.903.427-1.636.427-.333 0-.563-.047-.689-.141-.126-.093-.285-.308-.476-.641s-.352-.558-.482-.671c-.065-.058-.214.199-.446.769s-.262.973-.091 1.208c.496.66.745 1.294.745 1.904 0 1.855-2.673 3.801-8.02 5.835-4.378 1.668-9.313 2.502-14.806 2.502-5.477 0-10.306-1.106-14.489-3.319a18.333 18.333 0 0 1-3.039-2.027 24.436 24.436 0 0 1-1.831-1.696c-.448-.456-.7-.663-.757-.622-.008.008-.012.028-.012.061 0 .342.452 1.188 1.355 2.539 1.001 1.497 1.908 2.539 2.722 3.125 1.53 1.098 3.593 2.01 6.188 2.734 2.995.838 6.189 1.257 9.582 1.257 5.696 0 11.197-1.119 16.503-3.356 4.605-1.938 7.087-4.48 7.445-7.629.122.008.236.012.342.012 1.05 0 1.843-.557 2.38-1.672.789.96 1.782 1.44 2.979 1.44.333 0 .63-.302.891-.903.228-.521.341-.973.341-1.355 0-.602-.297-1.154-.891-1.66.391-.17 1.074-.354 2.05-.549 1.09-.22 2.01-.33 2.759-.33 1.204 0 2.547.249 4.028.745.822-.968 1.212-1.453 1.172-1.453-2.254-.472-3.938-.932-5.053-1.379zm-49.618-9.02c-.578-.089-1.013-.134-1.306-.134-.285 0-.655.276-1.11.83-.383.472-.574.777-.574.916 0 .057.024.085.073.085.016 0 .1-.063.25-.189s.287-.189.409-.189c.212 0 .566.032 1.062.098.537.081.867.155.989.22-.358.244-.944.496-1.757.756-.667.212-.989.346-.964.403.006.064.153.096.438.096.822 0 1.465-.089 1.929-.268.301-.155.659-.48 1.074-.977.439-.529.659-.936.659-1.221 0-.162-.391-.304-1.172-.426zm6.042 8.495a11.1 11.1 0 0 0-.11.549c-.073.334-.248.501-.525.501-.512 0-.769-.399-.769-1.196 0-.073.004-.183.012-.33.008-.146.012-.256.012-.33 0-.163-.024-.248-.073-.256-.106-.016-.204.228-.293.732a5.963 5.963 0 0 0-.122 1.025c0 .383.089.737.269 1.062.211.383.496.574.854.574.325 0 .582-.175.769-.525.146-.285.22-.606.22-.964 0-.626-.081-.907-.244-.842zm7.25 7.738c-.016-.016-.083.137-.201.458-.118.321-.177.519-.177.592 0 .024.008.049.024.073.838.92 1.314 2.03 1.428 3.332.032.375.073.562.122.562.163 0 .244-.428.244-1.282.001-1.399-.479-2.644-1.44-3.735zm8.899-6.078c-.797-.203-1.77-.525-2.917-.964-.854-.325-1.367-.488-1.538-.488-.7 0-1.257.313-1.672.939-.301.456-.452.854-.452 1.196 0 .024.004.041.012.049.358-.032.716-.049 1.074-.049 1.44 0 2.791.252 4.052.757-1.603.855-2.832 1.282-3.686 1.282-.48 0-.863-.118-1.147-.354-.195-.162-.293-.305-.293-.427 0 .058.02-.053.061-.33.024-.154-.008-.244-.098-.269-.057-.016-.188.09-.391.317-.277.317-.643.574-1.099.769-.968.415-2.437.785-4.406 1.11-2.238.367-4.492.55-6.762.55-4.134 0-6.958-.834-8.471-2.502-.439-.48-.749-.716-.928-.708-.448.017-.887.411-1.318 1.184-.39.7-.585 1.294-.585 1.782 0 .325.187.655.561.989-2.14 1.545-3.857 2.75-5.151 3.612-.342.228-.497.378-.464.452.008.023.041.036.098.036.358 0 1.166-.254 2.423-.763 1.257-.509 2.021-.889 2.289-1.142.48-.439.891-1.078 1.233-1.916.277.171.753.354 1.428.549s1.164.285 1.465.269c.203-.064.358-.338.464-.817 1.131.569 3.121.854 5.969.854 2.954 0 5.7-.261 8.239-.781 2.832-.578 4.447-1.33 4.846-2.258.496.968 1.038 1.452 1.624 1.452.415 0 1.615-.407 3.601-1.221s3.41-1.221 4.272-1.221c.667 0 1.293.081 1.879.244.065.017.256-.265.574-.842.26-.48.391-.757.391-.83 0-.016-.004-.024-.012-.024-2.183.002-3.904-.16-5.165-.486zm-15.118 7.116c-.565-.268-.885-.391-.958-.365-.26.455-.472.891-.635 1.306l-1.05-.464c-.431-.188-.683-.269-.756-.244-.082.024-.214.301-.397.83s-.262.842-.238.939c.016.065.293.223.83.471.537.248.863.372.977.372.098 0 .31-.436.635-1.306.977.545 1.554.793 1.733.744.073-.024.224-.303.452-.836s.325-.844.293-.934c-.025-.074-.32-.244-.886-.513zm-14.72 4.822c-1.176.562-1.882.943-2.118 1.147-.896.765-1.245 1.208-1.05 1.33.008.009.024.013.049.013.122-.09.614-.354 1.477-.794a180.24 180.24 0 0 1 2.93-1.416c.244-.146.488-.362.732-.646.269-.317.297-.476.085-.476-.228 0-.929.28-2.105.842zM95.494 6.238c-.375.122-.7.171-.977.146.431-.781.842-1.172 1.232-1.172.285 0 .428.143.428.427.001.245-.228.445-.683.599zm.61 17.284c0-.106.081-.251.244-.434.162-.183.293-.274.391-.274.081-.008.231.188.451.586.276.504.517.85.721 1.037-1.205-.251-1.807-.556-1.807-.915zM77.331 6.128c-.375.122-.7.171-.977.146.415-.797.826-1.196 1.233-1.196.285 0 .427.151.427.452.001.244-.227.444-.683.598zm4.663 8.935c-.13 0-.35-.053-.66-.159.041-.171.062-.322.062-.452a.74.74 0 0 0-.062-.33c.114.016.285.146.513.391.187.204.28.35.28.439a.114.114 0 0 1-.012.049c-.008.042-.048.062-.121.062zm-1.196-.231c-.448 0-.671-.085-.671-.256 0-.374.13-.562.391-.562.236 0 .354.143.354.427a1.287 1.287 0 0 1-.074.391zm2.306 7.628a3.531 3.531 0 0 1-1.916.366c-.375-.032-.562-.085-.562-.158 0-.154.838-.659 2.514-1.514-.023.211-.036.647-.036 1.306zM49.623 6.153c-.382.13-.708.183-.977.159.432-.781.842-1.172 1.233-1.172.285 0 .427.143.427.427.001.236-.227.432-.683.586zm10.705 15.05c-.358 0-.777-.135-1.257-.402a2.052 2.052 0 0 1-.5-.391c-.195-.204-.252-.367-.171-.488.057-.074.208-.102.452-.086.269.024.496.086.684.184.643.342.964.699.964 1.074-.001.072-.058.109-.172.109zM8.745 19.922c0-.105.082-.252.244-.439s.297-.289.403-.306c.073 0 .22.204.439.61.269.505.509.854.72 1.05-1.204-.252-1.806-.558-1.806-.915z"
                    ></path>
                  </g>
                </switch>
              </svg>
            ) : (
              ""
            )}
            <div className="space-y-6 mt-10 h-screen overflow-auto scrollbar-hide">
              {/* verse */}
              {chapter?.verses?.map((verse: any, i: number) => (
                <div
                  key={i}
                  className="border-b border-green-800 pb-5 pt-2 flex justify-between gap-5"
                >
                  <div className="w-10 text-white flex flex-col items-center gap-4">
                    <IoMdPlay />
                    <IoChatbubble />
                    <BsBookHalf />
                    <BsThreeDots />
                  </div>
                  <div className="flex-grow flex flex-col gap-10 justify-between">
                    <div
                      className="flex flex-wrap text-white font-lateef text-4xl gap-2"
                      dir="rtl"
                    >
                      {verse.words.map((word: any, i: number) => (
                        <button
                          key={i}
                          className={
                            word.char_type == "end"
                              ? "hidden"
                              : "" + " hover:text-green-400 relative group"
                          }
                        >
                          {word.text_madani}
                          <span className="hidden group-hover:block text-white text-2xl w-max absolute -top-10 right-0 bg-green-700 rounded-lg px-2">
                            {word.translation.text}
                          </span>
                        </button>
                      ))}
                    </div>
                    <p className="text-[#E0D2B4]">
                      {verse.translations[0].text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Footer />
        <CopyrightSection /> */}
      </main>
    </>
  );
};

export default SurahViewPage;
