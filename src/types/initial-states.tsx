interface ISProfile {
    error: boolean;
    complete: boolean;
    isFetching: boolean;
    profile: User | null;
}