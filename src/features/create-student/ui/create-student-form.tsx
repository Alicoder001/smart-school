"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { studentSchema, StudentSchema } from "../model/validation";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export interface CreateStudentFormProps {
  onSuccess?: (data: StudentSchema) => void;
  onCancel?: () => void;
}

export function CreateStudentForm({
  onSuccess,
  onCancel,
}: CreateStudentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSchema>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = (data: StudentSchema) => {
    console.log("Creating student:", data);
    onSuccess?.(data);
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-semibold">Create a new student</h1>

      <div className="space-y-4">
        <span className="text-xs text-gray-400 font-medium block">
          Authentication Information
        </span>
        <div className="flex justify-between flex-wrap gap-4">
          <Input
            label="Username"
            error={errors.username?.message}
            {...register("username")}
            className="md:w-[31%]"
          />
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
            className="md:w-[31%]"
          />
          <Input
            label="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
            className="md:w-[31%]"
          />
        </div>
      </div>

      <div className="space-y-4">
        <span className="text-xs text-gray-400 font-medium block">
          Personal Information
        </span>
        <div className="flex justify-between flex-wrap gap-4">
          <Input
            label="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
            className="md:w-[31%]"
          />
          <Input
            label="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
            className="md:w-[31%]"
          />
          <Input
            label="Phone"
            error={errors.phone?.message}
            {...register("phone")}
            className="md:w-[31%]"
          />
          <Input
            label="Address"
            error={errors.address?.message}
            {...register("address")}
            className="md:w-[31%]"
          />
          <Input
            label="Blood Type"
            error={errors.bloodType?.message}
            {...register("bloodType")}
            className="md:w-[31%]"
          />
          <Input
            label="Birthday"
            type="date"
            error={errors.birthday?.message}
            {...register("birthday")}
            className="md:w-[31%]"
          />

          <div className="flex flex-col gap-2 w-full md:w-[31%]">
            <label className="text-sm font-medium text-gray-700">Sex</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-lamaPurple"
              {...register("sex")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-500">{errors.sex.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full md:w-[31%] justify-center">
            <label
              className="text-sm font-medium text-gray-700 flex items-center gap-2 cursor-pointer hover:opacity-70"
              htmlFor="stud-img"
            >
              <Image src="/upload.png" alt="" width={28} height={28} />
              <span>Upload a photo</span>
            </label>
            <input
              type="file"
              id="stud-img"
              {...register("img")}
              className="hidden"
            />
            {errors.img?.message && (
              <p className="text-xs text-red-500">
                {errors.img.message.toString()}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" variant="primary">
          Create Student
        </Button>
      </div>
    </form>
  );
}
