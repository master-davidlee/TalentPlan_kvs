(function() {var implementors = {};
implementors["ansi_term"] = [{"text":"impl Clone for Prefix","synthetic":false,"types":[]},{"text":"impl Clone for Infix","synthetic":false,"types":[]},{"text":"impl Clone for Suffix","synthetic":false,"types":[]},{"text":"impl Clone for Style","synthetic":false,"types":[]},{"text":"impl Clone for Colour","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;'a + ToOwned + ?Sized&gt; Clone for ANSIGenericString&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: Debug,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["atty"] = [{"text":"impl Clone for Stream","synthetic":false,"types":[]}];
implementors["clap"] = [{"text":"impl Clone for AppSettings","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Clone for App&lt;'a, 'b&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Clone for Arg&lt;'a, 'b&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'a: 'b,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ArgMatches&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Values&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for OsValues&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ArgGroup&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ArgSettings","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for SubCommand&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Shell","synthetic":false,"types":[]},{"text":"impl Clone for ErrorKind","synthetic":false,"types":[]}];
implementors["libc"] = [{"text":"impl Clone for DIR","synthetic":false,"types":[]},{"text":"impl Clone for group","synthetic":false,"types":[]},{"text":"impl Clone for utimbuf","synthetic":false,"types":[]},{"text":"impl Clone for timeval","synthetic":false,"types":[]},{"text":"impl Clone for timespec","synthetic":false,"types":[]},{"text":"impl Clone for rlimit","synthetic":false,"types":[]},{"text":"impl Clone for rusage","synthetic":false,"types":[]},{"text":"impl Clone for ipv6_mreq","synthetic":false,"types":[]},{"text":"impl Clone for hostent","synthetic":false,"types":[]},{"text":"impl Clone for iovec","synthetic":false,"types":[]},{"text":"impl Clone for pollfd","synthetic":false,"types":[]},{"text":"impl Clone for winsize","synthetic":false,"types":[]},{"text":"impl Clone for linger","synthetic":false,"types":[]},{"text":"impl Clone for sigval","synthetic":false,"types":[]},{"text":"impl Clone for itimerval","synthetic":false,"types":[]},{"text":"impl Clone for tms","synthetic":false,"types":[]},{"text":"impl Clone for servent","synthetic":false,"types":[]},{"text":"impl Clone for protoent","synthetic":false,"types":[]},{"text":"impl Clone for FILE","synthetic":false,"types":[]},{"text":"impl Clone for fpos_t","synthetic":false,"types":[]},{"text":"impl Clone for timezone","synthetic":false,"types":[]},{"text":"impl Clone for in_addr","synthetic":false,"types":[]},{"text":"impl Clone for ip_mreq","synthetic":false,"types":[]},{"text":"impl Clone for ip_mreq_source","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_in","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_in6","synthetic":false,"types":[]},{"text":"impl Clone for addrinfo","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_ll","synthetic":false,"types":[]},{"text":"impl Clone for fd_set","synthetic":false,"types":[]},{"text":"impl Clone for tm","synthetic":false,"types":[]},{"text":"impl Clone for sched_param","synthetic":false,"types":[]},{"text":"impl Clone for Dl_info","synthetic":false,"types":[]},{"text":"impl Clone for lconv","synthetic":false,"types":[]},{"text":"impl Clone for in_pktinfo","synthetic":false,"types":[]},{"text":"impl Clone for ifaddrs","synthetic":false,"types":[]},{"text":"impl Clone for in6_rtmsg","synthetic":false,"types":[]},{"text":"impl Clone for arpreq","synthetic":false,"types":[]},{"text":"impl Clone for arpreq_old","synthetic":false,"types":[]},{"text":"impl Clone for arphdr","synthetic":false,"types":[]},{"text":"impl Clone for mmsghdr","synthetic":false,"types":[]},{"text":"impl Clone for epoll_event","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_un","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_storage","synthetic":false,"types":[]},{"text":"impl Clone for utsname","synthetic":false,"types":[]},{"text":"impl Clone for sigevent","synthetic":false,"types":[]},{"text":"impl Clone for fpos64_t","synthetic":false,"types":[]},{"text":"impl Clone for rlimit64","synthetic":false,"types":[]},{"text":"impl Clone for glob_t","synthetic":false,"types":[]},{"text":"impl Clone for passwd","synthetic":false,"types":[]},{"text":"impl Clone for spwd","synthetic":false,"types":[]},{"text":"impl Clone for dqblk","synthetic":false,"types":[]},{"text":"impl Clone for signalfd_siginfo","synthetic":false,"types":[]},{"text":"impl Clone for itimerspec","synthetic":false,"types":[]},{"text":"impl Clone for fsid_t","synthetic":false,"types":[]},{"text":"impl Clone for packet_mreq","synthetic":false,"types":[]},{"text":"impl Clone for cpu_set_t","synthetic":false,"types":[]},{"text":"impl Clone for if_nameindex","synthetic":false,"types":[]},{"text":"impl Clone for msginfo","synthetic":false,"types":[]},{"text":"impl Clone for sembuf","synthetic":false,"types":[]},{"text":"impl Clone for input_event","synthetic":false,"types":[]},{"text":"impl Clone for input_id","synthetic":false,"types":[]},{"text":"impl Clone for input_absinfo","synthetic":false,"types":[]},{"text":"impl Clone for input_keymap_entry","synthetic":false,"types":[]},{"text":"impl Clone for input_mask","synthetic":false,"types":[]},{"text":"impl Clone for ff_replay","synthetic":false,"types":[]},{"text":"impl Clone for ff_trigger","synthetic":false,"types":[]},{"text":"impl Clone for ff_envelope","synthetic":false,"types":[]},{"text":"impl Clone for ff_constant_effect","synthetic":false,"types":[]},{"text":"impl Clone for ff_ramp_effect","synthetic":false,"types":[]},{"text":"impl Clone for ff_condition_effect","synthetic":false,"types":[]},{"text":"impl Clone for ff_periodic_effect","synthetic":false,"types":[]},{"text":"impl Clone for ff_rumble_effect","synthetic":false,"types":[]},{"text":"impl Clone for ff_effect","synthetic":false,"types":[]},{"text":"impl Clone for dl_phdr_info","synthetic":false,"types":[]},{"text":"impl Clone for Elf32_Ehdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf64_Ehdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf32_Sym","synthetic":false,"types":[]},{"text":"impl Clone for Elf64_Sym","synthetic":false,"types":[]},{"text":"impl Clone for Elf32_Phdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf64_Phdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf32_Shdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf64_Shdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf32_Chdr","synthetic":false,"types":[]},{"text":"impl Clone for Elf64_Chdr","synthetic":false,"types":[]},{"text":"impl Clone for ucred","synthetic":false,"types":[]},{"text":"impl Clone for mntent","synthetic":false,"types":[]},{"text":"impl Clone for posix_spawn_file_actions_t","synthetic":false,"types":[]},{"text":"impl Clone for posix_spawnattr_t","synthetic":false,"types":[]},{"text":"impl Clone for genlmsghdr","synthetic":false,"types":[]},{"text":"impl Clone for in6_pktinfo","synthetic":false,"types":[]},{"text":"impl Clone for arpd_request","synthetic":false,"types":[]},{"text":"impl Clone for inotify_event","synthetic":false,"types":[]},{"text":"impl Clone for fanotify_response","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_vm","synthetic":false,"types":[]},{"text":"impl Clone for regmatch_t","synthetic":false,"types":[]},{"text":"impl Clone for sock_extended_err","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_nl","synthetic":false,"types":[]},{"text":"impl Clone for dirent","synthetic":false,"types":[]},{"text":"impl Clone for dirent64","synthetic":false,"types":[]},{"text":"impl Clone for sockaddr_alg","synthetic":false,"types":[]},{"text":"impl Clone for af_alg_iv","synthetic":false,"types":[]},{"text":"impl Clone for mq_attr","synthetic":false,"types":[]},{"text":"impl Clone for statx","synthetic":false,"types":[]},{"text":"impl Clone for statx_timestamp","synthetic":false,"types":[]},{"text":"impl Clone for aiocb","synthetic":false,"types":[]},{"text":"impl Clone for __exit_status","synthetic":false,"types":[]},{"text":"impl Clone for __timeval","synthetic":false,"types":[]},{"text":"impl Clone for glob64_t","synthetic":false,"types":[]},{"text":"impl Clone for msghdr","synthetic":false,"types":[]},{"text":"impl Clone for cmsghdr","synthetic":false,"types":[]},{"text":"impl Clone for termios","synthetic":false,"types":[]},{"text":"impl Clone for mallinfo","synthetic":false,"types":[]},{"text":"impl Clone for nlmsghdr","synthetic":false,"types":[]},{"text":"impl Clone for nlmsgerr","synthetic":false,"types":[]},{"text":"impl Clone for nl_pktinfo","synthetic":false,"types":[]},{"text":"impl Clone for nl_mmap_req","synthetic":false,"types":[]},{"text":"impl Clone for nl_mmap_hdr","synthetic":false,"types":[]},{"text":"impl Clone for nlattr","synthetic":false,"types":[]},{"text":"impl Clone for rtentry","synthetic":false,"types":[]},{"text":"impl Clone for timex","synthetic":false,"types":[]},{"text":"impl Clone for ntptimeval","synthetic":false,"types":[]},{"text":"impl Clone for regex_t","synthetic":false,"types":[]},{"text":"impl Clone for utmpx","synthetic":false,"types":[]},{"text":"impl Clone for sigset_t","synthetic":false,"types":[]},{"text":"impl Clone for sysinfo","synthetic":false,"types":[]},{"text":"impl Clone for msqid_ds","synthetic":false,"types":[]},{"text":"impl Clone for sigaction","synthetic":false,"types":[]},{"text":"impl Clone for statfs","synthetic":false,"types":[]},{"text":"impl Clone for flock","synthetic":false,"types":[]},{"text":"impl Clone for flock64","synthetic":false,"types":[]},{"text":"impl Clone for siginfo_t","synthetic":false,"types":[]},{"text":"impl Clone for stack_t","synthetic":false,"types":[]},{"text":"impl Clone for stat","synthetic":false,"types":[]},{"text":"impl Clone for stat64","synthetic":false,"types":[]},{"text":"impl Clone for statfs64","synthetic":false,"types":[]},{"text":"impl Clone for statvfs64","synthetic":false,"types":[]},{"text":"impl Clone for pthread_attr_t","synthetic":false,"types":[]},{"text":"impl Clone for _libc_fpxreg","synthetic":false,"types":[]},{"text":"impl Clone for _libc_xmmreg","synthetic":false,"types":[]},{"text":"impl Clone for _libc_fpstate","synthetic":false,"types":[]},{"text":"impl Clone for user_regs_struct","synthetic":false,"types":[]},{"text":"impl Clone for user","synthetic":false,"types":[]},{"text":"impl Clone for mcontext_t","synthetic":false,"types":[]},{"text":"impl Clone for ipc_perm","synthetic":false,"types":[]},{"text":"impl Clone for shmid_ds","synthetic":false,"types":[]},{"text":"impl Clone for termios2","synthetic":false,"types":[]},{"text":"impl Clone for ip_mreqn","synthetic":false,"types":[]},{"text":"impl Clone for user_fpregs_struct","synthetic":false,"types":[]},{"text":"impl Clone for ucontext_t","synthetic":false,"types":[]},{"text":"impl Clone for statvfs","synthetic":false,"types":[]},{"text":"impl Clone for max_align_t","synthetic":false,"types":[]},{"text":"impl Clone for sem_t","synthetic":false,"types":[]},{"text":"impl Clone for pthread_mutexattr_t","synthetic":false,"types":[]},{"text":"impl Clone for pthread_rwlockattr_t","synthetic":false,"types":[]},{"text":"impl Clone for pthread_condattr_t","synthetic":false,"types":[]},{"text":"impl Clone for fanotify_event_metadata","synthetic":false,"types":[]},{"text":"impl Clone for pthread_cond_t","synthetic":false,"types":[]},{"text":"impl Clone for pthread_mutex_t","synthetic":false,"types":[]},{"text":"impl Clone for pthread_rwlock_t","synthetic":false,"types":[]},{"text":"impl Clone for in6_addr","synthetic":false,"types":[]}];
implementors["textwrap"] = [{"text":"impl Clone for NoHyphenation","synthetic":false,"types":[]},{"text":"impl Clone for HyphenSplitter","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;Clone + WordSplitter&gt; Clone for Wrapper&lt;'a, S&gt;","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V:&nbsp;Clone&gt; Clone for VecMap&lt;V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, V&gt; Clone for Iter&lt;'a, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, V&gt; Clone for Keys&lt;'a, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, V&gt; Clone for Values&lt;'a, V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()