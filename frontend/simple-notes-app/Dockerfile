# Gunakan image Node.js sebagai basis
FROM node:14

# Tentukan direktori kerja dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin seluruh kode sumber frontend ke dalam container
COPY . .

# Bangun aplikasi React
RUN npm run build

# Instal server HTTP untuk menyajikan aplikasi
RUN npm install -g serve

# Ekspos port yang digunakan oleh frontend
EXPOSE 3000

# Perintah untuk menjalankan aplikasi frontend
CMD ["serve", "-s", "build"]
