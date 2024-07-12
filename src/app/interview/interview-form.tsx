"use client";
import { submitInterviewAction } from "@/app/interview/actions";
import { LoaderButton } from "@/components/loader-button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  InterviewExperience,
  interviewExperienceSchema,
} from "@/lib/interviews-shared-types";
import { Company } from "@/use-cases/companies";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useServerAction } from "zsa-react";

interface Props {
  companies: Company[];
}

export default function InterviewForm({ companies }: Props) {
  const form = useForm<InterviewExperience>({
    resolver: zodResolver(interviewExperienceSchema),
  });

  const { toast } = useToast();

  const { execute, isPending, error } = useServerAction(submitInterviewAction, {
    onError({ err }) {
      toast({
        title: "Algo deu errado",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: InterviewExperience) {
    execute(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem
                        key={company.id}
                        value={company.id.toString()}
                      >
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experiência</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="positive">Positiva</SelectItem>
                    <SelectItem value="neutral">Neutra</SelectItem>
                    <SelectItem value="negative">Negativa</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Como foi sua experiência na entrevista?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo de trabalho</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Remoto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="remote">Remoto</SelectItem>
                    <SelectItem value="hybrid">Híbrido</SelectItem>
                    <SelectItem value="onsite">Presencial</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Como foi sua experiência na entrevista?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interviewDifficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dificuldade da entrevista</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Média" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="easy">Fácil</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="hard">Difícil</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-8">
          <FormField
            control={form.control}
            name="receivedOffer"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormLabel>Recebeu oferta</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="acceptedOffer"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormLabel>Aceitou oferta</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="interviewQuestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Perguntas da entrevista</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Algoritmos e estruturas de dados, system design, fundamentos de JavaScript."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Quais perguntas fizeram na entrevista?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton type="submit" isLoading={isPending}>
          Enviar
        </LoaderButton>
      </form>
    </Form>
  );
}
