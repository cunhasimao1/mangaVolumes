<template>
  <div class="add">
    <!-- <form action="post" @submit.prevent="submit"> -->
    <form action="post">
      <section class="cover">
        <img ref="preview_cover" />
      </section>
      <section class="info">
        <div class="sec select_div">
          <label for="upload_saga">Saga:</label><br />
          <select v-model="select" name="upload_saga" id="upload_saga" required>
            <option value="!!new saga!!">--- New Saga ---</option>
            <option value="" selected></option>
            <option v-for="saga in sagas" :key="saga._id" :value="saga.name">{{ saga.name }}</option>
          </select>
          <input
            v-if="select == '!!new saga!!'"
            v-model="newSaga"
            type="text"
            name="upload_newSaga"
            id="upload_newSaga"
            :required="select == '!!new saga!!'"
          />
        </div>
        <div class="sec saga_div">
          <label for="upload_volume">Volume:</label><br />
          <input v-model="volume" type="number" name="upload_volume" id="upload_volume" required />
        </div>
        <div class="sec saga_cover">
          <label for="upload_cover">Cover:</label><br />
          <input type="file" accept="image/*" name="upload_cover" id="upload_cover" ref="upload_cover" required />
        </div>
        <div class="sec saga_submit">
          <input type="submit" value="Submit" ref="submitBtn" @click.prevent="submit" />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Add",
  data() {
    return {
      select: "default_blank",
      newSaga: "",
      volume: "",
    };
  },
  computed: mapGetters(["sagas"]),
  mounted() {
    let fileChooser = this.$refs.upload_cover;
    let imgContainer = this.$refs.preview_cover;
    fileChooser.onchange = () => {
      const [file] = fileChooser.files;
      if (file) {
        imgContainer.src = URL.createObjectURL(file);
      }
    };
  },
  methods: {
    ...mapActions(["addNew"]),
    submitText(text, borderColor) {
      this.$refs.submitBtn.value = text;
      this.$refs.submitBtn.style.borderColor = borderColor;
    },
    async submit() {
      this.submitText("...", "yellow");
      try {
        let { data } = await axios.get("/api/imgbb/key");
        const apiKey = data.api_key;

        let form = new FormData();
        form.append("image", this.$refs.upload_cover.files[0]);
        form.append("text", "formText");

        console.log(form);

        // let { data: imgbb } = await axios({
        //   url: `https://api.imgbb.com/1/upload?key=${apiKey}`,
        //   method: "POST",
        //   body: form,
        // });

        let res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
          method: "POST",
          body: form,
        });

        let imgbb = await res.json();

        console.log(imgbb);

        await this.addNew({
          newSaga: this.select == "!!new saga!!" && this.newSaga.length > 0,
          name: this.select == "!!new saga!!" && this.newSaga.length > 0 ? this.newSaga : this.select,
          volumes: [
            {
              volume: this.volume,
              image: imgbb.data.url,
            },
          ],
        });
        this.submitText("Done", "#363");
        setTimeout(() => {
          this.submitText("Submit", "#fff");
        }, 5000);
      } catch (e) {
        // console.log(e);
        this.submitText("Error", "#b33");
        setTimeout(() => {
          this.submitText("Submit", "#fff");
        }, 5000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  min-height: 650px;
  font-size: 30px;
}

form {
  display: flex;
  width: 80%;
}
input,
select,
option {
  color: #000;
  padding: 3px;
}

section.info {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
section.cover {
  position: relative;
  min-width: 375px;
  max-height: 625px;
}

img {
  flex: 1;
  height: 100%;
}
.sec {
  width: 80%;
  padding: 25px;
}
.saga_submit {
  text-align: right;
  & input {
    padding: 5px 20px;
    width: 150px;
    background-color: #000;
    border: none;
    border-bottom: 1px solid #fff;
    color: white;
    font-size: 18px;
  }
}

#upload_saga,
#upload_newSaga,
#upload_volume,
#upload_cover {
  margin-left: 25px;
}
#upload_cover {
  color: #fff;
}
</style>
