export type RootStackParamList = {
  Main: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Search: undefined;
  GameDetails: { gameId: string };
  PostDetails: { postId: string };
};

export type MainTabParamList = {
  Feed: undefined;
  Leaderboard: undefined;
  CreatePost: undefined;
  Notifications: undefined;
  MyProfile: undefined;
}; 