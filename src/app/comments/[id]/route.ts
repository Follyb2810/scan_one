import { commentData } from "../data";

const getId = async (params: Promise<{ id: string }>) => {
  const p = await params;
  return parseInt(p.id);
};

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = await getId(params);
  const comment = commentData.find((a) => a.id === id);

  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }

  return Response.json(comment);
}
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = await getId(params);
  const comment = commentData.findIndex((a) => a.id === id);

  if (comment === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  commentData.splice(comment,1)
  return Response.json('delete successfull');
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = await getId(params);
  const { text } = await request.json();

  const index = commentData.findIndex((a) => a.id === id);
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  commentData[index] = { id, text };

  return new Response(JSON.stringify(commentData[index]), {
    status: 200,
  });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = await getId(params);
  const { text } = await request.json();

  const index = commentData.findIndex((a) => a.id === id);
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  commentData[index] = {
    ...commentData[index],
    text: text ?? commentData[index].text, 
  };

  return new Response(JSON.stringify(commentData[index]), {
    status: 200,
  });
}

