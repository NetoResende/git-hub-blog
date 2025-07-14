import { useForm } from "react-hook-form";
import { FormContent } from "./styled";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../lib/axios";
// import { IssuesProps } from "../../../../contexts/IssueContext";
import { IssuesProps } from "../../Home";

const newFormValidattedSchema = zod.object({
  task: zod.string(),
});
type SeaechFormValidattedSchema = zod.infer<typeof newFormValidattedSchema>;

interface FormInputProps{
  issues: (issues: IssuesProps[])=>void
}
export function FormInput({issues}: FormInputProps) {
  const { register, handleSubmit, watch } = useForm<SeaechFormValidattedSchema>(
    {
      resolver: zodResolver(newFormValidattedSchema),
    }
  );

  async function handlerFormInput() {
    const result = await api.get("search/issues", {
      params: {
        q: `is:open${" "}${watch("task")}${" "}repo:NetoResende/git-hub-blog`,
      },
    });
    issues(result.data.items)
  }
  
  return (
    <FormContent onSubmit={handleSubmit(handlerFormInput)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("task")} />
    </FormContent>
  );
}
