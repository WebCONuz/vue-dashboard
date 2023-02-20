<template>
  <div>
    <h1 class="text-center text-indigo-700">Form Elements</h1>
    <Input inputType="text" placeholder="Enter username" labelId="userName" />
    <Input
      inputType="password"
      placeholder="Enter password"
      labelId="userPassword"
    />
    <Button
      btnType="button"
      textContent="Sign up"
      class="bg-green-500 text-white"
    />

    <Card>
      <img src="https://picsum.photos/id/350/430/240" alt="cover" />
      <div class="card-body p-3">
        <div class="card-title text-xl font-semibold my-2">
          Lorem ipsum solor ...
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex corporis
          deleniti corrupti obcaecati ipsum! Eligendi, neque quis magnam ipsa
          possimus modi, neque quis magnam ipsa possimus modi .
        </p>
        <div class="flex gap-x-2 mt-4">
          <Button
            btnType="button"
            textContent="Like"
            class="bg-green-500 text-white"
          />
          <Button
            btnType="button"
            textContent="Dis Like"
            class="bg-red-500 text-white"
          />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Input from "../../ui/Input.vue";
import Button from "../../ui/Button.vue";
import Card from "../../ui/Card.vue";
export default {
  name: "Form",
  components: {
    Input,
    Button,
    Card,
  },
};
</script>

<style></style>
