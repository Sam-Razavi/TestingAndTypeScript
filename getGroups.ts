export const getGroups = async (): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { "id": 1, "groupName": "Hajarna" },
          { "id": 2, "groupName": "Valarna" },
          { "id": 3, "groupName": "Zebrorna" }
        ]);
      }, 1000); // Simulera delay
    });
  };
