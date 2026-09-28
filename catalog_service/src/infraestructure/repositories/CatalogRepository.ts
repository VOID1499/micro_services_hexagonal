import type { ProducRepository } from "../../domain/models/product/product-repository.js";
import type { Product } from "../../domain/models/product/product.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";

export class CatalogRepository implements ProducRepository {

    private readonly _prisma: PrismaClient;

    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL!,
        });

        this._prisma = new PrismaClient({
            adapter,
        });
    }

    async create(data: Product): Promise<Product> {
        return this._prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                stock: data.stock,
            },
        });
    }

    async update(product: Product): Promise<Product> {

        if (product.id === undefined) {
            throw new Error("Product id is required to update");
        }

        return this._prisma.product.update({
            where: {
                id: product.id,
            },
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock,
            },
        });
}

    async delete(id: number): Promise<Product> {
        return this._prisma.product.delete({
            where: { id },
        });
    }

    async find(limit: number, offset: number): Promise<Product[]> {
        return this._prisma.product.findMany({
            take: limit,
            skip: offset,
        });
    }

    async findOne(id: number): Promise<Product> {
        return this._prisma.product.findUniqueOrThrow({
            where: { id },
        });
    }
}