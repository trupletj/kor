import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const inputClass =
    "border-[1px] border-[#707070] rounded-sm px-2 mb-2 h-[40px] outline-none accleration-none";

  return (
    <div className="flex flex-col">
      <div className="flex flex-row border-b w-full pb-2">
        <p className="mr-[30px] font-extrabold text-base">ID</p>
        <p className="text-[25px]">securenet1</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label className="formHeader" htmlFor="">
            비밀번호
          </label>
          <input
            className={inputClass}
            type="password"
            placeholder="password"
            {...register("password", { required: true, maxLength: 80 })}
          />
          <label className="formHeader" htmlFor="">
            비밀번호 재확인
          </label>

          <input
            className={inputClass}
            type="password"
            placeholder="confirmPassword"
            {...register("confirmPassword", { required: true, maxLength: 80 })}
          />
          <label className=" formHeader" htmlFor="">
            담당자명
          </label>
          <input
            className={inputClass}
            type="text"
            placeholder="이정재"
            {...register("contactPerson", { required: true })}
          />
          <label className="formHeader" htmlFor="">
            내선번호
          </label>
          <input
            className={inputClass}
            type="tel"
            placeholder="02-470-2080"
            {...register("extensionNumber", {})}
          />
          <label className="formHeader" htmlFor="">
            휴대폰 번호
          </label>
          <input
            className={inputClass}
            type="tel"
            placeholder="010-1122-3344"
            {...register("number", { required: true, maxLength: 12 })}
          />
          <label className="formHeader" htmlFor="">
            담당자 이메일
          </label>
          <input
            className={inputClass}
            type="text"
            placeholder="nice@securenet.kr"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <label className="formHeader" htmlFor="">
            비고
          </label>
          <input
            className={inputClass}
            type="text"
            {...register("note", { required: true })}
          />
        </div>
        <div className="w-full flex  mb-[80px]">
          <div className="font-extrabold formHeader ">권한</div>
          <h1 className="flex-grow text-[#737171] mb-2 text-center formHeader font-extrabold">
            <Link to="/"> 파일업로드</Link> /{" "}
            <Link to="/"> 성적서연결관리</Link> /<Link to="/"> 발신</Link>
          </h1>
        </div>
        <div className="flex justify-center  text-white formHeader">
          <button className="outline-none w-[124px] h-[50px] bg-[#959595] px-6 py-1 rounded mx-2">
            취 소
          </button>
          <button
            className="outline-none w-[124px] h-[50px] bg-[#959595] px-6 py-1 rounded mx-2"
            type="submit"
          >
            저 장
          </button>
        </div>
      </form>
    </div>
  );
}
