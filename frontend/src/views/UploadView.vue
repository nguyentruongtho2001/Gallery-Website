
<template>
  <div class="container px-8 mb-4">
    <h2 class="text-2xl font-semibold text-center mt-4"> Upload image to Cloudinary</h2>
    <div class="flex justify-center">
      <div class="grid md:grid-cols-6 grid-cols-1">
        <div class="grid md:col-start-2 md:col-span-4 shadow-lg">
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="blog p-6 rounded-lg bg-white max-w-sm mt-4">
              <form>
                <div class="form-group mb-6">
                  <div>
                    <label class="form-label inline-block mb-2 text-gray-700" for="file-input">Upload Image</label>
                    <input id="file-input" type="file"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded"
                      accept="image/png, image/jpg, image/jpeg" @change="handleFileChange($event)" />
                  </div>
                </div>
                <button type="submit" @click.prevent="submitUpload"
                  style="width: 100%; padding: 10px 24px; background-color: #34D399; color: #ffffff; font-size: medium; font-size: extra-small; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid rgba(0, 0, 0, 0.1);">
                  Upload
                </button>


              </form>

              <!-- Image Preview -->
              <div class="p-4" style="display: flex; flex-direction: column; align-items: center;">
                <h3 class="text-semibold text-center mb-2" style="display: inline-block; text-align: center;">Image
                  Preview</h3>
                  <AlertMessage v-if="error" :message="error" />
                <img v-if="filePreview" style="width: 50%; display: block;" class="bg-white p-1 border rounded"
                  :src="filePreview" />
                  <p v-if="fileSize">{{ fileSize }}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AlertMessage from '@/components/AlertMessage.vue';
const file = ref(null);
const filePreview = ref(null);
const error = ref(null);
const fileSize = ref(0.0);

const handleFileChange = (e) => {
  file.error = null;
  file.value = e.target.files[0];
  getImagePreviews(file.value);
}

 // format image size to human readable unit
function formatSize(size, decimal = 2){
  if(size === 0 ) return "0 bytes";
  const k = 1024;
  const dm = decimal < 0 ? 0 : decimal;
  const sizes = ["Bytes","KB", "MB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
 
  // get img preview
const getImagePreviews = (image) => {
  if(/\.(jpe?g|png)$/i.test(image.name) && image.size < 1000000){ 
// biểu thức chính quy rengular expression 
//     /\.(jpe?g|png)$/i: Đây là biểu thức chính quy:
// \.: ký tự dấu chấm.
// (jpe ? g | png): các chuỗi ký tự "jpg", "jpeg" hoặc "png".Trong đó, e ? biểu thị ký tự "e" có thể xuất hiện 0 hoặc 1 lần(cho phép kiểm tra cả "jpg" và "jpeg").
//   $: kết thúc chuỗi.
//     i: cờ biểu thị cho việc không phân biệt chữ hoa chữ thường(case -insensitive).
    let reader = new FileReader();
  reader.onloadend = (e) => {
    filePreview.value = e.target.result;
    fileSize.value = formatSize(image.size);
  };
  reader.readAsDataURL(image);
  }else {
    error.value = "File is not support for size  bigger than 1MB";
    filePreview.value = null;
    fileSize.value = null;
  }
  
}
  // Submid upload

  const submitUpload = () => {
    if(!file.value) return
    
  }
  // Upload img - connect with upload API
</script>

<style scoped>
.container {
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-semibold {
  font-weight: 600;
}

.text-center {
  text-align: center;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.md\:col-start-2 {
  grid-column-start: 2;
}

.md\:col-span-4 {
  grid-column-end: span 4;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.p-6 {
  padding: 1.5rem;
}

.rounded-lg {
  border-radius: 0.375rem;
}

.bg-white {
  background-color: #fff;
}

.max-w-sm {
  max-width: 20rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.inline-block {
  display: inline-block;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.text-gray-700 {
  color: #4b5563;
}

.form-control {
  appearance: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d2d6dc;
  border-radius: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 1rem;
  line-height: 1.5;
}

.block {
  display: block;
}

.w-full {
  width: 100%;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.text-base {
  font-size: 1rem;
}

.font-normal {
  font-weight: 400;
}

.border {
  border-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-gray-300 {
  border-color: #e2e8f0;
}

.rounded {
  border-radius: 0.25rem;
}

::-webkit-file-upload-button {
  font-size: 1rem;
  line-height: 1.5;
}

::-moz-file-upload-button {
  font-size: 1rem;
  line-height: 1.5;
}

input[type="file"] {
  -webkit-appearance: none;
}

input[type="file"]::file-selector-button {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  border-radius: 0.25rem;
  background-color: #edf2f7;
  color: #4b5563;
}

input[type="file"]::file-selector-button:hover {
  background-color: #e2e8f0;
}

input[type="file"]::file-selector-button:active {
  background-color: #cbd5e0;
}
</style>
