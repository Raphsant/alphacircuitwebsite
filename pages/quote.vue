<template>
  <div class="p-2">
    <div class="md:w-max max-w-7xl mx-auto">
      <div class="space-y-2 mb-8 pl-2 mt-4">
        <h1 class="text-3xl font-ubuntu">Request A Quote</h1>
        <h3 class="font-manrope text-2xl">
          Fill up the form and our team will get <br />
          back to you within 24 hours
        </h3>
      </div>

      <form
        name="ask-quote"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="bg-darkGreen-700 shadow-xl p-12 rounded-lg mb-8 font-manrope"
      >
        <input type="hidden" name="form-name" value="ask-quote" />
        <div class="grid gap-6 mb-6 md:grid-cols-3">
          <!-- First Name -->
          <div>
            <label
              for="first_name"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >First name</label
            >
            <input
              type="text"
              id="first_name"
              name="firstName"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder="John"
              required
            />
          </div>
          <!-- Last Name -->
          <div>
            <label
              for="last_name"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >Last name</label
            >
            <input
              type="text"
              id="last_name"
              name="lastName"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder="Doe"
              required
            />
          </div>
          <!-- Company -->
          <div>
            <label
              for="company"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >Company</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder=""
              required
            />
          </div>
          <!-- Phone Number -->
          <div>
            <label
              for="phone"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >Phone number</label
            >
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder="+1 (123) 456-7890"
              pattern="{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <!-- Email Address -->
          <div>
            <label
              for="email_address"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >Email Address</label
            >
            <input
              type="email"
              id="email_address"
              name="emailAddress"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          <!-- Estimated Quantity -->
          <div>
            <label
              for="quantity"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-white
                dark:text-gray-900
              "
              >Estimated Quantity</label
            >
            <input
              type="number"
              id="quantity"
              name="estimatedQuantity"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-gray-900
                dark:focus:ring-lightGreen-700
                dark:focus:border-lightGreen-700
              "
              placeholder=""
            />
          </div>
          <!-- Countries -->
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Select an option</label
            >
            <select
              v-model="country"
              id="countries"
              name="country"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option
                v-for="country in countries"
                :key="country.code"
                :value="country.name"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <!-- States -->
          <div>
            <label
              for="states"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Select an option</label
            >
            <select
              id="states"
              name="state"
              :disabled="country !== 'United States'"
              class="
                bg-gray-50
                border border-lightGreen-500
                text-gray-900 text-sm
                rounded-lg
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              :class="{
                'bg-gray-500': country !== 'United States',
                'border-black': country !== 'United States',
                'text-black': country !== 'United States',
                'inner-shadow': country !== 'United States',
              }"
            >
              <option
                v-for="state in states"
                :key="state.code"
                :value="country !== 'United States' ? 'N/A' : state.name"
              >
                {{ state.name }}
              </option>
            </select>
          </div>
          <!-- File Upload -->
          <div>
            <label
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              for="file_input"
              >Upload file</label
            >
            <input
              class="
                block
                w-max
                text-sm text-gray-900
                rounded-lg
                cursor-pointer
                bg-gray-50
                dark:text-gray-400
                focus:outline-none
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              "
              id="file_input"
              type="file"
              name="file"
              accept="image/png, image/jpeg, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </div>
        </div>

        <div class="mb-6">
          <!-- Message Box -->
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Your message</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="
                block
                p-2.5
                w-full
                text-sm text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                focus:ring-lightGreen-700 focus:border-lightGreen-700
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="
            text-gray-900
            bg-lightGreen-100
            hover:underline hover:bg-lightGreen-500
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            w-full
            sm:w-auto
            px-5
            py-2.5
            text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          Submit
        </button>
      </form>

      <div
        class="
          rounded-lg
          flex flex-col
          md:flex-row
          shadow-lg
          md:h-250
          max-w-5xl
          mx-auto
          mb-8
          p-2
          md:p-0
        "
      >
        <!-- Leftside -->
        <div
          class="
            text-left
            align-middle
            p-8
            text-black
            rounded-t-lg
            md:rounded-br-none md:rounded-tr-none md:rounded-lg md:h-250
            bg-neutrals-100
          "
        >
          <img
            class="-m-2 mb-2"
            src="~/assets/images/icons/60x60-Icons/icons8-schedule-60.png"
            alt=""
          />
          <h4 class="font-ubuntu font-semibold">Schedule A Visit</h4>
          <p class="font-manrope">
            Want to know more? Come by, schedule a visit, let's talk!
          </p>
        </div>
        <!-- Rightside -->
        <div>
          <div
            class="
              bg-lightGreen-100
              text-black
              rounded-b-lg
              md:rounded-bl-none md:rounded-r-lg md:h-250
              flex flex-col
              p-8
              md:pt-20
            "
          >
            <hr class="w-24 h-1 bg-gray-100 border-0 rounded" />
            <p class="mt-4 font-manrope text-lg">
              We welcome you to come visit our facility and discuss more about
              our solutions. Feel free to fill out your email and a member of
              our team will reach out! We appreciate your interest in Alpha
              Circuit!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const country = ref("United States");

const states = [
  { code: "N/A", name: "Please choose a State" },
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];
const countries = [
  { code: "US", name: "United States" },
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "DE", name: "Germany" },
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "BR", name: "Brazil" },
  { code: "IN", name: "India" },
  { code: "RU", name: "Russia" },
  { code: "MX", name: "Mexico" },
  { code: "ID", name: "Indonesia" },
  { code: "TR", name: "Turkey" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "ZA", name: "South Africa" },
  { code: "AR", name: "Argentina" },
  { code: "EG", name: "Egypt" },
];
</script>

<style scoped></style>
