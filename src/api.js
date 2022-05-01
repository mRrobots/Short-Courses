export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment typed",
      username: "Mosis",
      userId: "1",
      parentId: null,
      createdAt: "2022-04-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment by Mike",
      username: "Mike",
      userId: "2",
      parentId: null,
      createdAt: "2022-04-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "replies to mosis comment",
      username: "Mike",
      userId: "2",
      parentId: "1",
      createdAt: "2022-04-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Mike replies to his own comment",
      username: "Mike",
      userId: "2",
      parentId: "2",
      createdAt: "2022-04-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Mosis",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
