# Gunakan image Node.js sebagai basis
FROM node:14

# Tentukan direktori kerja dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin seluruh kode sumber backend ke dalam container
COPY . .

# Ekspos port yang digunakan oleh backend
EXPOSE 5000

# Perintah untuk menjalankan aplikasi backend
CMD ["npm", "start"]
