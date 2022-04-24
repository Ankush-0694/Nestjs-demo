import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

// in product module we implemented the mongoose
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/nestdemo";

@Module({
  imports: [AuthModule, PrismaModule, BookmarkModule, UserModule, ProductModule, MongooseModule.forRoot(mongoUrl)],
})

export class AppModule {}


/* 


for multiple databases

imports: [
  MongooseModule.forRoot('mongodb://localhost/test', {
    connectionName: 'cats',
  }),
  MongooseModule.forRoot('mongodb://localhost/users', {
    connectionName: 'users',
  }),
],

*/
