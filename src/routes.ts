import express, { Request, Response } from 'express';
import { MahasiswaCreateReq } from './interface';
import { Mahasiswa } from './models/mahasiswa';

const MahasiswaRouter = express.Router();

MahasiswaRouter.get(
  '/:npm',
  async (req: Request & { params: { npm: number } }, res: Response) => {
    const { npm } = req.params;
    const mahasiswa = await Mahasiswa.findOne({ npm });
    if (!mahasiswa) {
      return res.status(404).json({ status: 'NOT OK' });
    }
    return res.json({
      status: 'OK',
      nama: mahasiswa.nama,
      npm: mahasiswa.npm,
    });
  }
);

export default MahasiswaRouter;
