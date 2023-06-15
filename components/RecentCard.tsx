import Link from "next/link";
import React from "react";

const RecentCard = (props: any) => {
  const { data } = props;

  return (
    <Link
      href={"/surah/" + data.chapter_number}
      className="flex flex-col border border-[#E0D2B4] w-44 h-52 rounded p-3 shadow-xl shadow-gray-900"
    >
      <div className="flex justify-between gap-5 font-inter">
        <p className="text-sm text-gray-200 font-inter">{data.translated_name.name}</p>
        <p>{data.chapter_number}</p>
      </div>
      <h1 className="py-1 font-inter">Surah {data.name_simple}</h1>
      <div className="flex-grow"></div>
      <div className="flex flex-col justify-center items-center h-20 bg-[#022929] rounded">
        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="#CEAE6F"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.25 12.707C21.276 12.707 21.3086 12.6549 21.3477 12.5508C21.6602 11.9258 21.8164 11.1055 21.8164 10.0898C21.8164 9.80339 21.7383 8.54036 21.582 6.30078C21.4909 4.97266 21.4193 4.03516 21.3672 3.48828L21.3281 2.88281C21.3281 2.81771 21.3346 2.78516 21.3477 2.78516L21.3867 2.80469C21.5951 3.05208 21.7383 3.17578 21.8164 3.17578C21.8424 3.17578 21.8555 3.11719 21.8555 3C21.7383 2.6224 21.5885 2.21224 21.4062 1.76953C21.3281 1.54818 21.2565 1.36589 21.1914 1.22266L21.0156 0.734375C21.0026 0.721354 20.9831 0.701823 20.957 0.675781C20.944 0.64974 20.931 0.636719 20.918 0.636719L20.8594 0.734375C20.6641 1.21615 20.5664 1.52214 20.5664 1.65234C20.6706 1.8737 20.7227 2.16667 20.7227 2.53125C20.7227 2.84375 20.8138 4.28255 20.9961 6.84766C21.1784 9.39974 21.2695 10.8581 21.2695 11.2227C21.2695 11.8997 21.25 12.2773 21.2109 12.3555C21.2109 12.5898 21.2174 12.707 21.2305 12.707H21.25ZM18.9453 11.3008C18.9844 11.3008 19.043 10.9688 19.1211 10.3047C19.1211 10.1615 19.1276 10.0768 19.1406 10.0508C19.1406 9.08724 18.4831 7.94792 17.168 6.63281C16.5039 5.98177 15.8464 5.32422 15.1953 4.66016C14.3229 3.78776 13.7956 3.17578 13.6133 2.82422C13.8867 2.88932 14.1146 2.92188 14.2969 2.92188C14.3099 2.92188 14.3164 2.90885 14.3164 2.88281C14.3164 2.83073 14.2578 2.76562 14.1406 2.6875L12.7539 1.61328C12.6628 1.54818 12.5977 1.51562 12.5586 1.51562C12.5065 1.51562 12.4805 1.56771 12.4805 1.67188V2.47266C12.4805 2.5638 12.5065 2.61589 12.5586 2.62891C12.7148 2.74609 12.9427 3.07161 13.2422 3.60547C13.4766 3.97005 13.6914 4.27604 13.8867 4.52344C14.3294 5.07031 15.2865 6.02083 16.7578 7.375C17.9557 8.53385 18.6263 9.5625 18.7695 10.4609C18.8477 11.0208 18.9062 11.3008 18.9453 11.3008ZM15.4883 14.0742C15.7357 14.0482 16.1263 13.9635 16.6602 13.8203C17.207 13.6771 17.5911 13.5534 17.8125 13.4492C18.3724 13.2018 18.8737 12.7591 19.3164 12.1211C19.9023 11.3398 20.1953 10.3372 20.1953 9.11328C20.1953 8.54036 20.0911 7.42057 19.8828 5.75391C19.6875 4.07422 19.5898 3.09115 19.5898 2.80469C19.5898 2.73958 19.5964 2.70703 19.6094 2.70703L19.6484 2.72656C19.8698 2.97396 20.013 3.09766 20.0781 3.09766C20.1042 3.09766 20.1172 3.07812 20.1172 3.03906C20.1172 3 20.1107 2.96094 20.0977 2.92188C20.0846 2.88281 20.0716 2.83073 20.0586 2.76562C20.0065 2.59635 19.8503 2.23828 19.5898 1.69141L19.1211 0.734375C19.069 0.682292 19.0365 0.65625 19.0234 0.65625C19.0104 0.65625 18.9974 0.66276 18.9844 0.675781C18.9844 0.688802 18.9714 0.708333 18.9453 0.734375C18.9323 0.760417 18.9128 0.81901 18.8867 0.910156C18.8737 0.988281 18.8542 1.07943 18.8281 1.18359C18.75 1.44401 18.7109 1.59375 18.7109 1.63281C18.7109 1.64583 18.7435 1.75651 18.8086 1.96484C18.8867 2.17318 18.9258 2.34896 18.9258 2.49219C18.9258 2.76562 19.0495 3.94401 19.2969 6.02734C19.5573 8.11068 19.6875 9.51693 19.6875 10.2461C19.6875 10.5846 19.4466 11.0143 18.9648 11.5352C18.6003 11.9258 18.2422 12.2318 17.8906 12.4531C16.7708 13.1432 15.9701 13.625 15.4883 13.8984C15.4362 13.9245 15.3971 13.9505 15.3711 13.9766L15.332 14.0352C15.332 14.0612 15.3451 14.0742 15.3711 14.0742H15.4883ZM6.03516 13.4883C6.0612 13.4883 6.08724 13.4622 6.11328 13.4102C6.19141 13.2539 6.23047 13.1562 6.23047 13.1172C6.50391 12.4531 6.64062 11.6914 6.64062 10.832C6.64062 10.5456 6.57552 9.52344 6.44531 7.76562L6.25 5.20703C6.25 5.05078 6.25651 4.97266 6.26953 4.97266L6.30859 4.99219C6.51693 5.23958 6.66016 5.36328 6.73828 5.36328C6.76432 5.36328 6.77734 5.33724 6.77734 5.28516C6.77734 5.16797 6.6276 4.72526 6.32812 3.95703L5.9375 2.92188L5.85938 2.82422C5.82031 2.82422 5.79427 2.85026 5.78125 2.90234C5.57292 3.39714 5.46875 3.70964 5.46875 3.83984C5.57292 4.07422 5.625 4.35417 5.625 4.67969C5.625 5.00521 5.69661 6.21615 5.83984 8.3125C5.99609 10.3958 6.07422 11.6198 6.07422 11.9844C6.07422 12.388 6.05469 12.7331 6.01562 13.0195L5.99609 13.4492C6.00911 13.4753 6.02214 13.4883 6.03516 13.4883ZM2.36328 12.5898C2.38932 12.5898 2.48698 12.5443 2.65625 12.4531C3.125 12.1536 3.67839 11.8281 4.31641 11.4766L5.25391 10.9492C5.42318 10.6367 5.50781 10.4544 5.50781 10.4023C5.50781 10.3503 5.47526 10.3242 5.41016 10.3242C5.35807 10.3242 5.1888 10.3958 4.90234 10.5391C4.52474 10.7083 4.28385 10.7995 4.17969 10.8125C3.91927 10.8125 3.65885 10.7474 3.39844 10.6172C3.15104 10.474 3.02734 10.3568 3.02734 10.2656C3.02734 10.2266 3.13151 10.1615 3.33984 10.0703C3.54818 9.96615 3.71745 9.91406 3.84766 9.91406C3.92578 9.91406 3.99089 9.97917 4.04297 10.1094C4.10807 10.2396 4.15365 10.3047 4.17969 10.3047C4.25781 10.3047 4.34896 10.2331 4.45312 10.0898C4.55729 9.94661 4.60938 9.80339 4.60938 9.66016C4.60938 9.49089 4.5638 9.35417 4.47266 9.25C4.39453 9.13281 4.29036 9.07422 4.16016 9.07422C3.92578 9.07422 3.59375 9.27604 3.16406 9.67969C2.7474 10.0833 2.53906 10.4349 2.53906 10.7344C2.53906 10.9818 2.68229 11.1901 2.96875 11.3594L3.14453 11.4766C2.84505 11.6719 2.65625 11.8086 2.57812 11.8867C2.40885 12.2253 2.32422 12.4401 2.32422 12.5312C2.32422 12.5703 2.33724 12.5898 2.36328 12.5898ZM18.0664 15.8516L18.1641 15.7734C19.0104 15.2005 19.4596 14.9076 19.5117 14.8945C19.5638 14.8424 19.6029 14.7383 19.6289 14.582L19.6484 14.5039C19.6484 14.4909 19.6419 14.4844 19.6289 14.4844L19.4727 14.5234C19.3945 14.5885 19.3164 14.6406 19.2383 14.6797L19.1602 14.7578C18.9909 14.8359 18.8802 14.875 18.8281 14.875C18.75 14.875 18.6589 14.849 18.5547 14.7969C18.4505 14.7318 18.3984 14.6732 18.3984 14.6211C18.3984 14.582 18.444 14.5365 18.5352 14.4844C18.6263 14.4193 18.6979 14.3867 18.75 14.3867C18.8411 14.3867 18.9062 14.4323 18.9453 14.5234L19.0039 14.543C19.0169 14.543 19.0234 14.5365 19.0234 14.5234C19.1146 14.3932 19.1602 14.276 19.1602 14.1719C19.1602 13.9896 19.082 13.8984 18.9258 13.8984C18.7435 13.8984 18.5156 14.0612 18.2422 14.3867C18.099 14.543 18.0273 14.7057 18.0273 14.875C18.0273 15.0182 18.1641 15.1419 18.4375 15.2461C18.2161 15.4023 18.099 15.5195 18.0859 15.5977C18.0729 15.6628 18.0599 15.7344 18.0469 15.8125L18.0664 15.8516ZM16.5625 2.58984C16.4583 2.58984 16.4062 2.54427 16.4062 2.45312C16.4062 2.24479 16.4648 2.02995 16.582 1.80859C16.9596 2.04297 17.1484 2.20573 17.1484 2.29688C17.1094 2.36198 17.0247 2.42708 16.8945 2.49219C16.7643 2.55729 16.6536 2.58984 16.5625 2.58984ZM16.582 3.09766C16.8294 3.09766 17.0378 2.98047 17.207 2.74609C17.2591 2.66797 17.3047 2.47266 17.3438 2.16016V2.14062C17.3438 1.86719 17.1615 1.59375 16.7969 1.32031C16.849 1.13802 16.9141 0.96224 16.9922 0.792969L17.0117 0.753906C17.0117 0.714844 16.9857 0.695312 16.9336 0.695312C16.8815 0.695312 16.8164 0.740885 16.7383 0.832031C16.4779 1.3138 16.3086 1.84766 16.2305 2.43359L16.2109 2.62891C16.2109 2.91536 16.3346 3.07161 16.582 3.09766ZM13.4961 8.05859C13.3919 8.05859 13.3398 8.00651 13.3398 7.90234C13.3398 7.69401 13.3984 7.48568 13.5156 7.27734C13.8932 7.4987 14.082 7.65495 14.082 7.74609C14.0299 7.8112 13.9388 7.88281 13.8086 7.96094C13.6914 8.02604 13.5872 8.05859 13.4961 8.05859ZM13.4961 8.54688C13.7565 8.54688 13.9714 8.42969 14.1406 8.19531C14.1927 8.11719 14.2318 7.92188 14.2578 7.60938V7.58984C14.2578 7.31641 14.0755 7.04948 13.7109 6.78906C13.763 6.59375 13.8281 6.41146 13.9062 6.24219L13.9258 6.20312C13.9258 6.17708 13.8997 6.16406 13.8477 6.16406C13.7956 6.16406 13.737 6.20312 13.6719 6.28125C13.4115 6.76302 13.2357 7.30339 13.1445 7.90234L13.125 8.09766C13.125 8.38411 13.2487 8.53385 13.4961 8.54688ZM8.28125 7.80469C8.51562 7.80469 8.67839 7.53125 8.76953 6.98438V6.92578H8.75L8.73047 6.96484C8.61328 7.19922 8.5026 7.31641 8.39844 7.31641C8.24219 7.31641 8.16406 7.17969 8.16406 6.90625C8.16406 6.72396 8.24219 6.4375 8.39844 6.04688C8.55469 5.64323 8.63281 5.27214 8.63281 4.93359C8.63281 4.17839 8.38542 3.61198 7.89062 3.23438L7.85156 3.19531L7.65625 3.52734L7.63672 3.56641L7.65625 3.625C8.15104 4.10677 8.39844 4.60807 8.39844 5.12891C8.39844 5.40234 8.33984 5.67578 8.22266 5.94922C8.02734 6.44401 7.92969 6.83464 7.92969 7.12109C7.92969 7.5638 8.04688 7.79167 8.28125 7.80469ZM10.0586 4.03516C10.1628 4.03516 10.2604 3.77474 10.3516 3.25391C10.4818 2.5638 10.6185 2.21875 10.7617 2.21875C10.8268 2.21875 10.8789 2.24479 10.918 2.29688C10.9701 2.34896 11.0091 2.38802 11.0352 2.41406C11.0612 2.4401 11.0807 2.45312 11.0938 2.45312C11.1198 2.45312 11.1523 2.40104 11.1914 2.29688C11.2174 2.25781 11.2305 2.21875 11.2305 2.17969C11.2305 2.04948 11.1914 1.93229 11.1133 1.82812C11.0352 1.72396 10.9505 1.67188 10.8594 1.67188C10.7031 1.67188 10.5534 1.84115 10.4102 2.17969C10.2409 2.80469 10.1562 3.18229 10.1562 3.3125C10.1432 3.3125 10.1367 3.31901 10.1367 3.33203H10.1172V3.25391C10.0521 2.85026 9.9349 2.53125 9.76562 2.29688C9.60938 2.04948 9.42057 1.92578 9.19922 1.92578C9.17318 1.92578 9.12109 1.9974 9.04297 2.14062C8.96484 2.28385 8.92578 2.36198 8.92578 2.375C8.92578 2.42708 8.97135 2.50521 9.0625 2.60938C9.16667 2.70052 9.2513 2.74609 9.31641 2.74609C9.34245 2.74609 9.36198 2.73958 9.375 2.72656C9.38802 2.71354 9.40104 2.70052 9.41406 2.6875C9.42708 2.67448 9.45312 2.66797 9.49219 2.66797C9.57031 2.66797 9.67448 2.83724 9.80469 3.17578C9.9349 3.51432 10 3.7487 10 3.87891V3.95703C10.013 3.98307 10.0195 4.0026 10.0195 4.01562C10.0195 4.02865 10.0326 4.03516 10.0586 4.03516ZM7.61719 9.64062C9.33594 8.9375 10.8333 8.35156 12.1094 7.88281C12.1484 7.85677 12.207 7.75911 12.2852 7.58984L12.3047 7.49219L12.1875 7.51172C10.6771 8.08464 9.21875 8.625 7.8125 9.13281C7.73438 9.3151 7.66927 9.48438 7.61719 9.64062ZM11.3672 6.14453C11.6146 6.14453 11.7839 5.87109 11.875 5.32422V5.24609C11.862 5.24609 11.8555 5.2526 11.8555 5.26562L11.8359 5.30469C11.7188 5.53906 11.6016 5.65625 11.4844 5.65625C11.3281 5.65625 11.25 5.5 11.25 5.1875C11.25 4.95312 11.3411 4.5625 11.5234 4.01562L11.582 3.80078C11.556 3.80078 11.5299 3.82682 11.5039 3.87891C11.4779 3.91797 11.4583 3.95703 11.4453 3.99609C11.1719 4.52995 11.0352 5.04427 11.0352 5.53906C11.0352 5.94271 11.1458 6.14453 11.3672 6.14453ZM9.76562 15.793L9.94141 15.7539C10.1888 15.6888 10.4167 15.5846 10.625 15.4414C10.7682 15.2982 10.9049 15.1615 11.0352 15.0312C11.1654 14.888 11.3021 14.7513 11.4453 14.6211C11.8359 14.2695 12.2135 14.0938 12.5781 14.0938C12.6302 14.0938 12.7018 14.1133 12.793 14.1523C12.8971 14.1784 12.9753 14.1914 13.0273 14.1914C13.2357 14.1914 13.4505 14.0742 13.6719 13.8398C13.8411 13.918 13.9844 13.957 14.1016 13.957C14.1667 13.957 14.2188 13.944 14.2578 13.918C14.3099 13.8919 14.362 13.8073 14.4141 13.6641C14.4792 13.5078 14.5117 13.3646 14.5117 13.2344C14.5117 13.1172 14.4792 13.0195 14.4141 12.9414C14.388 12.9414 14.3424 12.9935 14.2773 13.0977V13.1172C14.2383 13.1823 14.2188 13.2279 14.2188 13.2539L14.2773 13.4883C13.9909 13.4883 13.8477 13.4688 13.8477 13.4297V13.4102C13.8867 13.293 13.9062 13.2148 13.9062 13.1758L13.8867 13.1367C13.8477 13.1367 13.8086 13.1693 13.7695 13.2344C13.7305 13.2865 13.6914 13.3385 13.6523 13.3906C13.6263 13.4297 13.5938 13.4818 13.5547 13.5469C13.4635 13.651 13.3464 13.7031 13.2031 13.7031C13.138 13.7031 13.0469 13.6901 12.9297 13.6641C12.8255 13.625 12.7474 13.6055 12.6953 13.6055C12.4219 13.6055 12.1549 13.7031 11.8945 13.8984C11.6732 14.0417 11.4714 14.224 11.2891 14.4453C11.0156 14.7839 10.8073 15.0247 10.6641 15.168L9.76562 15.7734V15.793ZM1.79688 8.68359C1.90104 8.68359 2.00521 8.42318 2.10938 7.90234C2.22656 7.21224 2.35677 6.86719 2.5 6.86719C2.5651 6.86719 2.63021 6.90625 2.69531 6.98438C2.73438 7.01042 2.76042 7.03646 2.77344 7.0625C2.79948 7.08854 2.81901 7.10156 2.83203 7.10156C2.85807 7.10156 2.89062 7.04948 2.92969 6.94531C2.95573 6.90625 2.96875 6.86719 2.96875 6.82812C2.96875 6.71094 2.92969 6.60026 2.85156 6.49609C2.78646 6.39193 2.70833 6.33984 2.61719 6.33984C2.44792 6.33984 2.29167 6.5026 2.14844 6.82812C1.97917 7.45312 1.89453 7.83073 1.89453 7.96094C1.88151 7.96094 1.875 7.96745 1.875 7.98047L1.85547 7.90234C1.79036 7.4987 1.67318 7.17969 1.50391 6.94531C1.34766 6.69792 1.15885 6.57422 0.9375 6.57422C0.924479 6.57422 0.872396 6.64583 0.78125 6.78906C0.703125 6.93229 0.664062 7.01042 0.664062 7.02344C0.664062 7.07552 0.709635 7.15365 0.800781 7.25781C0.904948 7.34896 0.996094 7.39453 1.07422 7.39453C1.1263 7.39453 1.15885 7.38151 1.17188 7.35547C1.1849 7.32943 1.20443 7.31641 1.23047 7.31641C1.30859 7.31641 1.41276 7.48568 1.54297 7.82422C1.67318 8.16276 1.73828 8.39714 1.73828 8.52734V8.60547C1.76432 8.65755 1.78385 8.68359 1.79688 8.68359ZM3.80859 5.44141C4.04297 5.44141 4.20573 5.16797 4.29688 4.62109C4.3099 4.62109 4.31641 4.61458 4.31641 4.60156C4.31641 4.58854 4.3099 4.58203 4.29688 4.58203V4.5625L4.27734 4.60156V4.62109C4.14714 4.84245 4.02344 4.95312 3.90625 4.95312C3.75 4.95312 3.67188 4.80339 3.67188 4.50391C3.67188 4.26953 3.76302 3.87891 3.94531 3.33203L4.00391 3.09766C3.99089 3.09766 3.96484 3.13672 3.92578 3.21484L3.86719 3.3125C3.59375 3.84635 3.45703 4.36068 3.45703 4.85547C3.45703 5.24609 3.57422 5.44141 3.80859 5.44141ZM31.5234 10.4609C31.0938 10.4609 30.8789 10.3568 30.8789 10.1484C30.8789 9.97917 31.0156 9.89453 31.2891 9.89453C31.5495 9.89453 31.8099 10.0638 32.0703 10.4023H32.0117C31.8294 10.4414 31.6667 10.4609 31.5234 10.4609ZM19.668 15.8906C19.7461 15.8906 19.9219 15.8711 20.1953 15.832C20.4818 15.7799 21.1589 15.6302 22.2266 15.3828C23.2943 15.1224 23.8477 14.9922 23.8867 14.9922C24.082 14.9922 24.7201 14.6732 25.8008 14.0352C27.0638 13.332 27.9557 12.681 28.4766 12.082C28.6328 11.9128 28.75 11.6849 28.8281 11.3984C28.9062 11.112 28.9453 10.8776 28.9453 10.6953C28.9453 10.3047 28.8411 9.86849 28.6328 9.38672L28.2227 8.46875L28.6328 8.56641C28.6719 8.55339 28.6914 8.54036 28.6914 8.52734C28.6914 8.48828 28.6328 8.41016 28.5156 8.29297L27.6758 7.39453C27.6367 7.35547 27.6107 7.33594 27.5977 7.33594C27.5456 7.33594 27.5 7.48568 27.4609 7.78516L27.4023 8.37109C27.4023 8.38411 27.4089 8.40365 27.4219 8.42969C27.4479 8.45573 27.487 8.50781 27.5391 8.58594C27.5911 8.66406 27.6367 8.78776 27.6758 8.95703C27.7669 9.26953 27.9427 9.69271 28.2031 10.2266C28.4115 10.7083 28.5156 10.9688 28.5156 11.0078C28.5156 11.151 28.3073 11.3854 27.8906 11.7109C26.6536 12.6354 24.9414 13.5599 22.7539 14.4844C20.6706 15.3568 19.6289 15.819 19.6289 15.8711C19.6289 15.8841 19.6419 15.8906 19.668 15.8906ZM23.7695 13C24.043 13 24.362 12.8828 24.7266 12.6484C25.1042 12.4141 25.3581 12.1862 25.4883 11.9648C25.5664 11.8477 25.638 11.6784 25.7031 11.457C25.7682 11.2357 25.8008 11.0534 25.8008 10.9102C25.8008 10.5586 25.7552 10.2591 25.6641 10.0117C25.5339 9.6862 25.2865 9.30859 24.9219 8.87891C25.2865 8.34505 25.5599 7.92188 25.7422 7.60938C26.0286 7.11458 26.1719 6.72396 26.1719 6.4375C26.1719 6.17708 26.1654 6.05339 26.1523 6.06641C26.1133 6.06641 26.0547 6.17057 25.9766 6.37891C25.8984 6.58724 25.6836 6.95182 25.332 7.47266C24.9284 8.09766 24.6875 8.46224 24.6094 8.56641C24.2969 8.35807 23.9974 8.07161 23.7109 7.70703L23.6133 7.57031C23.6133 7.54427 23.737 7.53125 23.9844 7.53125C24.1016 7.53125 24.1602 7.51172 24.1602 7.47266L24.1016 7.41406C24.0625 7.375 23.8932 7.25781 23.5938 7.0625L23.3594 6.90625C23.0599 6.71094 22.8841 6.61328 22.832 6.61328C22.806 6.61328 22.7669 6.71745 22.7148 6.92578C22.6758 7.13411 22.6562 7.32292 22.6562 7.49219C22.6562 7.59635 22.6953 7.6875 22.7734 7.76562L23.0469 8.03906C23.4245 8.58594 23.776 9.01562 24.1016 9.32812C23.724 9.92708 23.4701 10.3958 23.3398 10.7344C23.1836 11.138 23.1055 11.5612 23.1055 12.0039C23.1055 12.668 23.3268 13 23.7695 13ZM23.8867 11.8867C23.5742 11.8867 23.418 11.7826 23.418 11.5742C23.418 11.4049 23.5612 11.0794 23.8477 10.5977C24.0951 10.1549 24.2969 9.84896 24.4531 9.67969C24.9349 10.0833 25.2734 10.4935 25.4688 10.9102V10.9492C25.4688 11.0013 25.4297 11.0664 25.3516 11.1445C25.0781 11.3919 24.7786 11.5872 24.4531 11.7305C24.2188 11.8346 24.0299 11.8867 23.8867 11.8867ZM24.0234 5.94922C24.0625 5.94922 24.0885 5.92969 24.1016 5.89062C24.2057 5.7474 24.2969 5.57812 24.375 5.38281L24.4141 5.30469C24.7266 5.5 25 5.6888 25.2344 5.87109H25.2539C25.293 5.87109 25.319 5.85807 25.332 5.83203C25.5794 5.42839 25.7031 5.16146 25.7031 5.03125C25.7031 4.99219 25.5599 4.88151 25.2734 4.69922C25 4.51693 24.8503 4.42578 24.8242 4.42578C24.7852 4.42578 24.7591 4.4388 24.7461 4.46484L24.4531 5.07031C24.375 4.97917 24.2188 4.85547 23.9844 4.69922C23.75 4.54297 23.6133 4.46484 23.5742 4.46484C23.5612 4.46484 23.5482 4.47786 23.5352 4.50391C23.5221 4.51693 23.5091 4.52995 23.4961 4.54297L23.1445 5.30469L23.1641 5.34375C23.4505 5.52604 23.7305 5.72786 24.0039 5.94922H24.0234ZM33.6914 15.3047L33.8672 15.2656C34.1667 15.1615 34.3945 15.0573 34.5508 14.9531C34.8763 14.6276 35.0716 14.4258 35.1367 14.3477H35.1562V14.3281L35.1953 14.3086L35.3711 14.1328C35.7617 13.7812 36.1393 13.6055 36.5039 13.6055C36.556 13.6055 36.6276 13.625 36.7188 13.6641C36.8229 13.6901 36.901 13.7031 36.9531 13.7031C37.1615 13.7031 37.3763 13.5859 37.5977 13.3516C37.7669 13.4297 37.9102 13.4688 38.0273 13.4688C38.0924 13.4688 38.1445 13.4557 38.1836 13.4297C38.2357 13.4036 38.2878 13.306 38.3398 13.1367C38.4049 13.0065 38.4375 12.8763 38.4375 12.7461C38.4375 12.6289 38.4049 12.5312 38.3398 12.4531C38.3138 12.4531 38.2682 12.5052 38.2031 12.6094V12.6289C38.1641 12.681 38.1445 12.7266 38.1445 12.7656L38.2031 13C37.9167 13 37.7734 12.9805 37.7734 12.9414V12.9219C37.8125 12.8047 37.832 12.7266 37.832 12.6875L37.8125 12.6289C37.7734 12.6289 37.7279 12.668 37.6758 12.7461C37.6237 12.8242 37.5521 12.9219 37.4609 13.0391C37.3828 13.1562 37.2721 13.2148 37.1289 13.2148C37.0508 13.2148 36.9596 13.2018 36.8555 13.1758C36.7513 13.1367 36.6732 13.1172 36.6211 13.1172C36.3477 13.1172 36.0807 13.2148 35.8203 13.4102C35.599 13.5534 35.3971 13.7357 35.2148 13.957C34.9414 14.2956 34.7331 14.5365 34.5898 14.6797L33.6914 15.2852V15.3047ZM30.9766 7.51172C31.0807 7.51172 31.1849 7.2513 31.2891 6.73047C31.4062 6.04036 31.5365 5.69531 31.6797 5.69531C31.7578 5.69531 31.8359 5.73438 31.9141 5.8125L32.0117 5.92969C32.0378 5.92969 32.0768 5.87109 32.1289 5.75391L32.1484 5.63672C32.1484 5.51953 32.1094 5.40885 32.0312 5.30469C31.9661 5.20052 31.888 5.14844 31.7969 5.14844C31.6276 5.14844 31.4779 5.3112 31.3477 5.63672C31.1654 6.2487 31.0742 6.6263 31.0742 6.76953C31.0742 6.78255 31.0677 6.78906 31.0547 6.78906L31.0352 6.71094C30.9701 6.30729 30.8529 5.98828 30.6836 5.75391C30.5273 5.51953 30.3451 5.40234 30.1367 5.40234C30.1107 5.40234 30.0521 5.47396 29.9609 5.61719C29.8828 5.76042 29.8438 5.83854 29.8438 5.85156C29.8438 5.90365 29.8893 5.97526 29.9805 6.06641C30.0846 6.15755 30.1758 6.20312 30.2539 6.20312L30.332 6.18359C30.3451 6.15755 30.3581 6.14453 30.3711 6.14453C30.4753 6.14453 30.5924 6.3138 30.7227 6.65234C30.8529 6.97786 30.918 7.20573 30.918 7.33594V7.375C30.918 7.38802 30.918 7.40755 30.918 7.43359C30.931 7.44661 30.9375 7.46615 30.9375 7.49219C30.9505 7.50521 30.9635 7.51172 30.9766 7.51172ZM26.875 5.67578C27.0833 5.54557 28.1055 5.13542 29.9414 4.44531L30.5664 4.21094C31.9596 3.6901 32.6693 3.42318 32.6953 3.41016C32.7214 3.38411 32.7734 3.29297 32.8516 3.13672L32.8711 3.05859L32.8516 3.01953C32.8385 3.03255 32.8255 3.03906 32.8125 3.03906C32.7995 3.03906 32.7799 3.04557 32.7539 3.05859L30.6641 3.82031L27.0508 5.16797C26.9596 5.33724 26.901 5.50651 26.875 5.67578ZM25.2734 1.82812C25 1.69792 24.8568 1.58724 24.8438 1.49609C24.8438 1.47005 24.8763 1.4375 24.9414 1.39844C25.0195 1.35938 25.0781 1.33984 25.1172 1.33984C25.2474 1.33984 25.3125 1.4375 25.3125 1.63281C25.3125 1.69792 25.2995 1.76302 25.2734 1.82812ZM22.4219 4.11328C22.474 4.11328 22.5391 4.09375 22.6172 4.05469C23.1901 3.84635 23.5156 3.72266 23.5938 3.68359C23.8672 3.56641 24.1602 3.39062 24.4727 3.15625C24.7982 2.92188 25.0586 2.67448 25.2539 2.41406C25.4232 2.50521 25.5273 2.58984 25.5664 2.66797C25.7227 2.44661 25.8008 2.29036 25.8008 2.19922C25.7617 2.12109 25.651 2.03646 25.4688 1.94531C25.5599 1.6849 25.6055 1.45703 25.6055 1.26172C25.6055 1.0013 25.5078 0.871094 25.3125 0.871094C25.1823 0.871094 25.0326 0.949219 24.8633 1.10547C24.6549 1.30078 24.5508 1.51562 24.5508 1.75C24.5508 1.94531 24.7201 2.1276 25.0586 2.29688C24.8112 2.57031 24.4206 2.86979 23.8867 3.19531C23.431 3.44271 22.9883 3.70312 22.5586 3.97656L22.4219 4.09375V4.11328ZM36.543 4.58203C36.2695 4.45182 36.1263 4.34115 36.1133 4.25C36.1133 4.21094 36.1458 4.17188 36.2109 4.13281C36.2891 4.09375 36.3477 4.07422 36.3867 4.07422C36.5169 4.07422 36.582 4.17839 36.582 4.38672C36.582 4.45182 36.569 4.51693 36.543 4.58203ZM32.9297 7.25781C32.9688 7.25781 33.0273 7.24479 33.1055 7.21875C33.1966 7.15365 33.5872 6.9974 34.2773 6.75C35.332 6.28125 36.0807 5.75391 36.5234 5.16797C36.6797 5.25911 36.7578 5.32422 36.7578 5.36328L36.6992 5.51953C36.5299 6.02734 36.4453 6.40495 36.4453 6.65234C36.4453 7.04297 36.5625 7.23828 36.7969 7.23828C37.0182 7.23828 37.181 6.96484 37.2852 6.41797V6.35938H37.2656L37.2266 6.41797C37.1094 6.63932 37.0052 6.75 36.9141 6.75C36.7578 6.75 36.6797 6.61328 36.6797 6.33984C36.6797 6.05339 36.7708 5.6888 36.9531 5.24609C36.9792 5.12891 36.9922 5.04427 36.9922 4.99219C36.9922 4.88802 36.9076 4.77734 36.7383 4.66016C36.8294 4.42578 36.875 4.21094 36.875 4.01562C36.875 3.75521 36.7708 3.625 36.5625 3.625C36.4453 3.625 36.3021 3.69661 36.1328 3.83984C35.9245 4.03516 35.8203 4.25 35.8203 4.48438C35.8203 4.67969 35.9896 4.86849 36.3281 5.05078C36.0677 5.32422 35.5534 5.68229 34.7852 6.125C34.6029 6.21615 34.4271 6.3138 34.2578 6.41797C33.8672 6.65234 33.4635 6.88021 33.0469 7.10156C32.9557 7.16667 32.9102 7.21875 32.9102 7.25781H32.9297ZM27.9492 3.68359C28.1836 3.68359 28.3464 3.41016 28.4375 2.86328L28.457 2.84375L28.4375 2.80469L28.418 2.84375C28.3008 3.07812 28.1836 3.19531 28.0664 3.19531C27.9102 3.19531 27.832 3.0651 27.832 2.80469C27.832 2.53125 27.9232 2.11458 28.1055 1.55469L28.1445 1.33984C28.1315 1.33984 28.1055 1.37891 28.0664 1.45703L28.0273 1.53516C27.7409 2.06901 27.5977 2.58333 27.5977 3.07812C27.5977 3.48177 27.7148 3.68359 27.9492 3.68359ZM33.1055 10.2266C33.0534 10.2526 33.0078 10.2656 32.9688 10.2656C32.7865 9.88802 32.5651 9.5625 32.3047 9.28906C32.0573 9.01562 31.8164 8.87891 31.582 8.87891C31.2826 8.87891 30.9896 9.04818 30.7031 9.38672C30.4297 9.72526 30.293 10.1224 30.293 10.5781C30.293 11.1771 30.7357 11.4766 31.6211 11.4766C32.0117 11.4766 32.3242 11.4375 32.5586 11.3594C32.6107 11.4896 32.6367 11.6068 32.6367 11.7109C32.6367 11.8802 32.3698 12.2188 31.8359 12.7266C31.25 13.2734 30.6445 13.7357 30.0195 14.1133C29.2513 14.582 28.5938 14.8164 28.0469 14.8164C27.4089 14.8164 26.9466 14.6211 26.6602 14.2305C26.4779 13.957 26.3867 13.6315 26.3867 13.2539C26.3867 12.8372 26.5039 12.2318 26.7383 11.4375C26.7643 11.3203 26.7773 11.2357 26.7773 11.1836C26.7773 11.1445 26.7708 11.125 26.7578 11.125C26.7188 11.125 26.6667 11.2096 26.6016 11.3789C26.2891 12.1862 26.1328 12.974 26.1328 13.7422C26.1328 14.3411 26.276 14.8359 26.5625 15.2266C26.888 15.6953 27.3633 15.9297 27.9883 15.9297C28.7174 15.9297 29.5638 15.5586 30.5273 14.8164C31.1914 14.3216 31.7904 13.7487 32.3242 13.0977C32.5716 12.8242 32.7604 12.4792 32.8906 12.0625C33.0078 11.75 33.0664 11.4831 33.0664 11.2617L33.1055 11.2227V11.2617C33.7565 10.9753 34.2253 10.6562 34.5117 10.3047C34.5117 11.138 34.8893 11.5612 35.6445 11.5742C36.2826 11.5742 36.8034 11.2161 37.207 10.5C37.4544 10.9427 37.7214 11.1641 38.0078 11.1641C38.4505 11.1641 38.7826 10.9622 39.0039 10.5586C39.2122 10.2461 39.3164 9.86198 39.3164 9.40625C39.3164 9.10677 39.2383 8.85286 39.082 8.64453C39.043 8.57943 38.9974 8.54688 38.9453 8.54688C38.9062 8.54688 38.8737 8.59896 38.8477 8.70312C38.7435 9.05469 38.6784 9.30208 38.6523 9.44531L38.8867 9.89453C38.8216 10.0247 38.6589 10.0898 38.3984 10.0898C38.2031 10.0898 38.0339 10.0312 37.8906 9.91406C37.7474 9.79688 37.6758 9.67318 37.6758 9.54297C37.6888 9.54297 37.7279 9.40625 37.793 9.13281L37.832 8.97656C37.832 8.92448 37.806 8.89844 37.7539 8.89844C37.7018 8.89844 37.6367 8.93099 37.5586 8.99609L37.0117 9.89453C36.7122 10.2852 36.3346 10.4805 35.8789 10.4805C35.306 10.4805 35.0195 10.2721 35.0195 9.85547C35.0195 9.76432 35.0391 9.64714 35.0781 9.50391C35.1172 9.34766 35.1367 9.24349 35.1367 9.19141C35.1367 9.1263 35.1172 9.09375 35.0781 9.09375C35.026 9.09375 34.9544 9.1263 34.8633 9.19141C34.5117 9.50391 34.069 9.79036 33.5352 10.0508C33.4049 10.1029 33.2617 10.1745 33.1055 10.2656V10.2266ZM10.918 10.3242C9.98047 10.3242 8.89323 11.0339 7.65625 12.4531C7.17448 13.0391 6.6862 13.612 6.19141 14.1719C5.61849 14.7839 5.13021 15.0898 4.72656 15.0898C4.47917 15.0898 4.27734 14.9987 4.12109 14.8164C3.97786 14.6211 3.90625 14.3802 3.90625 14.0938C3.90625 13.7161 4.02995 13.2018 4.27734 12.5508C4.52474 11.8867 4.64844 11.4961 4.64844 11.3789L4.62891 11.3398C4.58984 11.3398 4.54427 11.3984 4.49219 11.5156C3.93229 12.6224 3.65234 13.5143 3.65234 14.1914C3.65234 14.6992 3.78906 15.1224 4.0625 15.4609C4.34896 15.7865 4.67448 15.9492 5.03906 15.9492C5.36458 15.9492 5.6901 15.7995 6.01562 15.5C6.23698 15.3177 6.56901 14.9531 7.01172 14.4062C7.50651 13.7812 7.91016 13.306 8.22266 12.9805C9.22526 11.9518 10.1302 11.4375 10.9375 11.4375C11.1068 11.4635 11.3867 11.5872 11.7773 11.8086C12.168 12.0299 12.5 12.1406 12.7734 12.1406C13.4245 12.1406 13.9453 11.7826 14.3359 11.0664C14.5964 11.5221 14.8698 11.75 15.1562 11.75C15.599 11.75 15.9245 11.5482 16.1328 11.1445C16.3281 10.819 16.4258 10.4284 16.4258 9.97266C16.4258 9.6862 16.3477 9.4388 16.1914 9.23047C16.1654 9.16536 16.1328 9.13281 16.0938 9.13281C16.0547 9.13281 16.0221 9.1849 15.9961 9.28906C15.8919 9.64062 15.8268 9.90104 15.8008 10.0703L16.0352 10.4805C15.9701 10.6107 15.8073 10.6758 15.5469 10.6758C15.3385 10.6758 15.1628 10.6237 15.0195 10.5195C14.8893 10.4023 14.8242 10.2786 14.8242 10.1484L14.9414 9.60156C14.9414 9.52344 14.9154 9.47786 14.8633 9.46484C14.8242 9.46484 14.7656 9.50391 14.6875 9.58203L14.1406 10.4414C13.8542 10.832 13.5286 11.0273 13.1641 11.0273C12.8646 11.0273 12.5195 10.9167 12.1289 10.6953C11.7513 10.474 11.3477 10.3503 10.918 10.3242Z"
            fill="#CEAE6F"
          />
        </svg>

        <p>Ayah {data.verses_count}</p>
      </div>
    </Link>
  );
};

export default RecentCard;
