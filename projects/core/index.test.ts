import { BaseDTOType } from "./index";
import { Status, validateBaseDTO } from "./index";
import { describe, it, expect } from "@jest/globals";

describe("Testing projects/core/index.ts", () => {
  describe("testing validateBaseDTO function", () => {
    it("should validate a correct BaseDTO object", () => {
      const data: BaseDTOType = {
        id: 1,
        name: "Test Name",
        description: "This is a test description.",
        status: Status.UNKNOWN,
      };

      const validation = validateBaseDTO(data);
      expect(validation.success).toBe(true);
    });
  });
});
