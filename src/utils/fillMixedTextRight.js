/**Create align left mixed text
 * @param {number} x - x coordinate
 * @param {number} y - y coordinate
 * @param {Object[]} args - List of Text
 * @param {any} ctx - Canvas Context
 * */

module.exports = function(ctx, args, x, y) {
  let defaultFillStyle = ctx.fillStyle;
  let defaultFont = ctx.font;

  ctx.textAlign = "end";
  ctx.save();
  args.reverse();
  args.forEach(({ text, fillStyle, font }) => {
    ctx.fillStyle = fillStyle || defaultFillStyle;
    ctx.font = font || defaultFont;
    ctx.fillText(text, x, y);
    x -= ctx.measureText(text).width;
  });
  ctx.restore();
};