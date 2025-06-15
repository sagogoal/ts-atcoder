try {
    throw new Error("何かがおかしい");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.name);    // "Error"
      console.error(err.message); // "何かがおかしい"
      console.error(err.stack);   // スタックトレース（環境による）
    }
  }