<!-- <template>
  <div class="container px-8 mb-4">
    <h2 class="text-2lx font-semibold text-center"> haahhahah</h2>
    <div class="grid md:grid-cols-6 grid-cols-1">
      <div class="grid md:grid-start-2 md:col-span-4 shadow-lg">
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="blog p-6 rounded-lg bg-white max-w-sm mt-4">
              <form>
                <div class="form-group mb-6">
                  <div>
                    <label class="form-label inline-block mb-2 text-gray-700" for="file-input">Upload Image</label>
                    <input id="file-input" type="file" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded"
                    accept="image/png, image/jpg, image/jpeg" />
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="container px-8 mb-4">
    <h2 class="text-2xl font-semibold text-center"> haahhahah</h2>
    <div class="flex justify-center">
      <div class="grid md:grid-cols-6 grid-cols-1">
        <div class="grid md:col-start-2 md:col-span-4 shadow-lg">
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="blog p-6 rounded-lg bg-white max-w-sm mt-4">
              <form>
                <div class="form-group mb-6">
                  <div>
                    <label class="form-label inline-block mb-2 text-gray-700" for="file-input">Upload Image</label>
                    <input id="file-input" type="file" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded"
                    accept="image/png, image/jpg, image/jpeg" />
                  </div>
                </div>
                <button type="submit" @click.prevent="submitUpload" style="width: 100%; padding: 10px 24px; background-color: #34D399; color: #ffffff; font-size: medium; font-size: extra-small; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid rgba(0, 0, 0, 0.1);">
  Upload
</button>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
