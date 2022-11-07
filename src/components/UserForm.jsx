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

  const inputClass = "border border-[#D9DAD9] rounded-sm px-2 mb-2 py-2";

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row border-b w-full mb-2 pb-2">
        <p className="mr-2 font-bold">ID</p>
        <p>securenet1</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label className="font-bold my-1" htmlFor="">
            비밀번호
          </label>
          <input
            className={inputClass}
            type="password"
            placeholder="password"
            {...register("password", { required: true, maxLength: 80 })}
          />
          <label className="font-bold my-1" htmlFor="">
            비밀번호 재확인
          </label>
          <input
            className={inputClass}
            type="password"
            placeholder="confirmPassword"
            {...register("confirmPassword", { required: true, maxLength: 80 })}
          />
          <label className="font-bold my-1" htmlFor="">
            담당자명
          </label>
          <input
            className={inputClass}
            type="text"
            placeholder="이정재"
            {...register("contactPerson", { required: true })}
          />
          <label className="font-bold my-1" htmlFor="">
            내선번호
          </label>
          <input
            className={inputClass}
            type="tel"
            placeholder="02-470-2080"
            {...register("extensionNumber", {})}
          />
          <label className="font-bold my-1" htmlFor="">
            휴대폰 번호
          </label>
          <input
            className={inputClass}
            type="tel"
            placeholder="010-1122-3344"
            {...register("number", { required: true, maxLength: 12 })}
          />
          <label className="font-bold my-1" htmlFor="">
            담당자 이메일
          </label>
          <input
            className={inputClass}
            type="text"
            placeholder="nice@securenet.kr"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <label className="font-bold my-1" htmlFor="">
            비고
          </label>
          <input
            className={inputClass}
            type="text"
            {...register("note", { required: true })}
          />
        </div>
        <div className="w-full flex my-2">
          <div className="w-1/4 font-bold">권한</div>
          <div className="w-3/4  text-[#D9DAD9] mb-2 text-right">
            <Link to="/"> 파일업로드</Link> /{" "}
            <Link to="/"> 성적서연결관리</Link> /<Link to="/"> 발신</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="outline-none bg-[#D9DAD9] px-6 py-1 rounded mx-2">
            취 소
          </button>
          <button
            className="outline-none bg-[#D9DAD9] px-6 py-1 rounded mx-2"
            type="submit"
          >
            저 장
          </button>
        </div>
      </form>
    </div>
  );
}
