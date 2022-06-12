/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';

export interface IMahasiswa {
  nama: string;
  npm: number;
}

interface MahasiswaDoc extends IMahasiswa, mongoose.Document {}

const todoSchema = new mongoose.Schema({
  npm: {
    type: Number,
    required: true,
    unique: true,
  },
  nama: {
    type: String,
    required: true,
  },
});

export const Mahasiswa = mongoose.model<MahasiswaDoc>('Mahasiswa', todoSchema);
