import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import clear from "rollup-plugin-clear";

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/library.mjs",
      },
      {
        format: "cjs",
        file: "dist/library.js",
      },
    ],
    /*
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
    },
    */
    plugins: [
      vue({ preprocessStyles: true }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
          include: null,
        },
      }),
      peerDepsExternal(),
      clear({
        targets: ["./dist"],
      }),
    ],
  },
];
