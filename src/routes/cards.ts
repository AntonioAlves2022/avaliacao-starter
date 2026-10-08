// =============================================================
//  Rotas de Cards - ESTE É O ARQUIVO DA SUA PROVA
//  Complete cada bloco marcado com // TODO:
//  Consulte src/routes/decks.ts como exemplo e o ROTEIRO para
//  os códigos HTTP e formatos de resposta exigidos.
// =============================================================
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function cardRoutes(app: FastifyInstance) {
  const server = app.withTypeProvider<ZodTypeProvider>();

  // -----------------------------------------------------------
  // Schema reutilizável para o parâmetro :id da URL
  // -----------------------------------------------------------
  // TODO: crie o schema `paramsSchema` com o campo `id`
  //       (número inteiro positivo; dica: z.coerce.number())
  // const paramsSchema = ...

  // ===========================================================
  // ROTA 1 - POST /cards  (Criar card)              [3,0 pts]
  // ===========================================================
  // TODO: crie o schema `createCardSchema` com:
  //   - question: string, obrigatória, mínimo 3 caracteres
  //   - answer:   string, obrigatória, mínimo 1 caractere
  //   - deckId:   número inteiro positivo
  // const createCardSchema = ...

  server.post(
    "/cards",
    {
      // TODO: registre o schema do body aqui -> schema: { body: createCardSchema }
    },
    async (request, reply) => {
      // TODO:
      // 1. Pegue question, answer e deckId de request.body
      // 2. Verifique se o baralho (deckId) existe -> se não, 404
      // 3. Crie o card com prisma.card.create(...)
      // 4. Responda com status 201 e o card criado
      return reply.status(501).send({ message: "Rota não implementada" });
    },
  );

  // ===========================================================
  // ROTA 2 - GET /cards  (Listar cards)             [2,0 pts]
  // ===========================================================
  server.get("/cards", async (request, reply) => {
    // TODO:
    // 1. Busque todos os cards com prisma.card.findMany(...)
    // 2. Inclua o baralho vinculado retornando apenas id e name:
    //      include: { deck: { select: { id: true, name: true } } }
    // 3. Ordene por id crescente
    // 4. Responda com status 200 e a lista (array)
    return reply.status(501).send({ message: "Rota não implementada" });
  });

  // ===========================================================
  // ROTA 3 - GET /cards/:id  (Buscar card por ID)   [2,0 pts]
  // ===========================================================
  server.get(
    "/cards/:id",
    {
      // TODO: registre o schema dos params -> schema: { params: paramsSchema }
    },
    async (request, reply) => {
      // TODO:
      // 1. Pegue o id de request.params
      // 2. Busque com prisma.card.findUnique(...) incluindo o deck
      // 3. Se não existir -> 404 { message: "Card não encontrado" }
      // 4. Se existir -> 200 com o card
      return reply.status(501).send({ message: "Rota não implementada" });
    },
  );

  // ===========================================================
  // ROTA 4 - DELETE /cards/:id  (Remover card)      [2,0 pts]
  // ===========================================================
  server.delete(
    "/cards/:id",
    {
      // TODO: registre o schema dos params
    },
    async (request, reply) => {
      // TODO:
      // 1. Pegue o id de request.params
      // 2. Verifique se o card existe -> se não, 404
      // 3. Remova com prisma.card.delete(...)
      // 4. Responda 200 { message: "Card removido com sucesso" }
      return reply.status(501).send({ message: "Rota não implementada" });
    },
  );

  // ===========================================================
  // BÔNUS - POST /cards/:id/review  (Registrar revisão) [+1,0]
  // ===========================================================
  // TODO (opcional): crie `reviewSchema` com:
  //   - grade: número inteiro de 1 a 5
  server.post(
    "/cards/:id/review",
    {
      // TODO: registre params e body
    },
    async (request, reply) => {
      // TODO (opcional):
      // 1. Verifique se o card existe -> se não, 404
      // 2. Atualize com prisma.card.update(...):
      //      reviewCount: { increment: 1 }
      //      lastGrade: grade
      //      lastReviewedAt: new Date()
      // 3. Responda 200 com o card atualizado
      return reply.status(501).send({ message: "Rota não implementada" });
    },
  );
}
