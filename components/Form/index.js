import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";
import { useRouter } from "next/router";

const FormContainer = styled.form`
  display: flex;
  margin: 2rem 2rem 4rem 2rem;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid #784f41;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid #784f41;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  color: #784f41;
`;


export default function Form({ onSubmit, id, formName, defaultData }) {
    const router = useRouter();
    const { push } = router;
    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      // post data from the form to api/books
      onSubmit({...data, userId:id});
      console.log(data)
      event.target.reset();
      push("/profile");
    }
  console.log(id)
    return (
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="name">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          defaultValue={defaultData?.title}
        />
        <Label htmlFor="name">Author</Label>
        <Input
          id="author"
          name="author"
          type="text"
          defaultValue={defaultData?.author}
        />
        <Label htmlFor="image-url">Image Url</Label>
        <Input
          id="image-url"
          name="image"
          type="text"
          defaultValue={defaultData?.image}
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue={defaultData?.description}
        ></Textarea>
        <StyledButton type="submit">
          {defaultData ? "Update book" : "Add book"}
        </StyledButton>
      </FormContainer>
    );
  }
  