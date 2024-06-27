import { createAvatar } from '@dicebear/core';
import { avataaarsNeutral } from '@dicebear/collection';

function userAvatar(seed) {
  const avatar = createAvatar(avataaarsNeutral, {
    seed: seed,
    radius: 20,
    eyes: ["eyeRoll", "happy", "hearts", "winkWacky", "xDizzy", "default", "wink"],
    mouth: ["default", "grimace", "smile", "tongue", "twinkle", "serious", "screamOpen"],
    // backgroundColor: ["b6e3f4", "80edb8", "edcb91", "b69aed", "f0a1bc", "e8dca2", "e6b3ac"],
  });

  return avatar.toString();
}

export default userAvatar;
